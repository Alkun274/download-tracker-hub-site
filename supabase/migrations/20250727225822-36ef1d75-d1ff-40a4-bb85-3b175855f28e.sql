-- Enable required extensions for cron jobs
CREATE EXTENSION IF NOT EXISTS pg_cron;
CREATE EXTENSION IF NOT EXISTS pg_net;

-- Create software_versions table to store current version info
CREATE TABLE public.software_versions (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  version TEXT NOT NULL,
  download_url TEXT NOT NULL,
  size TEXT,
  last_updated TIMESTAMP WITH TIME ZONE DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS (make it public readable for now)
ALTER TABLE public.software_versions ENABLE ROW LEVEL SECURITY;

-- Allow everyone to read software versions (public data)
CREATE POLICY "Software versions are publicly readable" 
ON public.software_versions 
FOR SELECT 
USING (true);

-- Create trigger to update last_updated timestamp
CREATE OR REPLACE FUNCTION public.update_software_version_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.last_updated = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_software_versions_timestamp
  BEFORE UPDATE ON public.software_versions
  FOR EACH ROW
  EXECUTE FUNCTION public.update_software_version_timestamp();

-- Insert initial data from current static data
INSERT INTO public.software_versions (id, name, version, download_url, size) VALUES 
('chrome', 'Google Chrome', '120.0.6099', 'https://www.google.com/chrome/', '95.2 MB'),
('firefox', 'Mozilla Firefox', '121.0', 'https://www.mozilla.org/firefox/', '56.8 MB'),
('vscode', 'Visual Studio Code', '1.85.0', 'https://code.visualstudio.com/', '85.1 MB'),
('discord', 'Discord', '1.0.9152', 'https://discord.com/download', '92.3 MB'),
('vlc', 'VLC Media Player', '3.0.20', 'https://www.videolan.org/vlc/', '41.2 MB');