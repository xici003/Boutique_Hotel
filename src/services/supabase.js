import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://actgxifhsikgcvbjimyz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFjdGd4aWZoc2lrZ2N2YmppbXl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgyNDA2NjksImV4cCI6MjAzMzgxNjY2OX0.ljH4JdHE1l8wKtwsqaavznUVJaQtMGhOjrO0U2gBcZY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
