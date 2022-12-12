import { createClient } from '@supabase/auth-helpers-sveltekit';

export const supabase = createClient(
	'https://fzdlbjblnheurzgmqztt.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6ZGxiamJsbmhldXJ6Z21xenR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA4ODU2MDUsImV4cCI6MTk4NjQ2MTYwNX0.jZtiZj6ymZNJI-3Eiz99t2kz9AzwzKnyC369utg1pwM'
);
