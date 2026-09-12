
-- Guestbook entries table
CREATE TABLE public.guestbook_entries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  message TEXT NOT NULL,
  emoji TEXT DEFAULT '👋',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.guestbook_entries ENABLE ROW LEVEL SECURITY;

-- Anyone can read guestbook entries
CREATE POLICY "Anyone can view guestbook entries"
ON public.guestbook_entries FOR SELECT
USING (true);

-- Anyone can insert (public guestbook)
CREATE POLICY "Anyone can add guestbook entries"
ON public.guestbook_entries FOR INSERT
WITH CHECK (true);

-- Seed some initial testimonial-style guestbook entries
INSERT INTO public.guestbook_entries (name, message, emoji) VALUES
  ('Visitor', 'Amazing portfolio! Love the AI ventures.', '🚀'),
  ('Tech Enthusiast', 'The journey from UPSC to AI is truly inspiring.', '🌟');
