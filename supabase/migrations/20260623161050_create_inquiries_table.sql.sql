CREATE TABLE inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  event_type text NOT NULL,
  event_date date,
  guests integer,
  message text,
  status text NOT NULL DEFAULT 'new'
);

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "insert_inquiries" ON inquiries FOR INSERT
  TO anon WITH CHECK (true);

CREATE POLICY "select_own_inquiries" ON inquiries FOR SELECT
  TO authenticated USING (auth.uid() = auth.uid());

CREATE POLICY "update_own_inquiries" ON inquiries FOR UPDATE
  TO authenticated USING (auth.uid() = auth.uid()) WITH CHECK (auth.uid() = auth.uid());

CREATE POLICY "delete_own_inquiries" ON inquiries FOR DELETE
  TO authenticated USING (auth.uid() = auth.uid());
