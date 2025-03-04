import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qjawxqbdahfzlxrurrds.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqYXd4cWJkYWhmemx4cnVycmRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwMjM0OTksImV4cCI6MjA1NjU5OTQ5OX0.ZPEb58N2Nyii2xunHSQvXW9AA20uowZhwb_yRl-4CGA'
export const supabase = createClient(supabaseUrl, supabaseKey)
