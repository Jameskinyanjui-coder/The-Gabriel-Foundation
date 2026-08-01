-- This file is for your reference. 
-- Copy and paste this into the "SQL Editor" in your Supabase dashboard to create your tables.

-- Create a table for Contact Form submissions
CREATE TABLE IF NOT EXISTS public.contact_messages (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    interest TEXT,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Turn on Row Level Security
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (so public users can submit the contact form)
CREATE POLICY "Allow public inserts" ON public.contact_messages FOR INSERT WITH CHECK (true);

-- Only authenticated users (admins) can view the messages
CREATE POLICY "Allow admin to select" ON public.contact_messages FOR SELECT USING (auth.role() = 'authenticated');

-- ============================================
-- Content Updates Table (News, Events, Impact)
-- ============================================
CREATE TABLE IF NOT EXISTS public.site_updates (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    summary TEXT NOT NULL,
    content_type TEXT NOT NULL CHECK (content_type IN ('news', 'event', 'impact', 'insight', 'blog')),
    event_date TIMESTAMP WITH TIME ZONE,
    event_location TEXT,
    external_link TEXT,
    badge_text TEXT,
    image_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Turn on Row Level Security
ALTER TABLE public.site_updates ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read the updates (for the frontend website)
CREATE POLICY "Allow public read" ON public.site_updates FOR SELECT USING (true);

-- Only authenticated users (admins) can insert/update/delete
CREATE POLICY "Allow admin to insert" ON public.site_updates FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Allow admin to update" ON public.site_updates FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Allow admin to delete" ON public.site_updates FOR DELETE USING (auth.role() = 'authenticated');

-- ============================================
-- Supabase Storage (For Post Images)
-- ============================================
-- NOTE: Please run this section to create the bucket and allow uploads.
INSERT INTO storage.buckets (id, name, public) 
VALUES ('images', 'images', true) 
ON CONFLICT (id) DO NOTHING;

-- Policies for storage
CREATE POLICY "Public Access" ON storage.objects FOR SELECT USING (bucket_id = 'images');
CREATE POLICY "Admin Uploads" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'images' AND auth.role() = 'authenticated');
CREATE POLICY "Admin Delete" ON storage.objects FOR DELETE USING (bucket_id = 'images' AND auth.role() = 'authenticated');
