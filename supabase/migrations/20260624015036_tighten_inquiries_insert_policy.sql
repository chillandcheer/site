DROP POLICY IF EXISTS "insert_inquiries" ON inquiries;

CREATE POLICY "insert_inquiries" ON inquiries FOR INSERT
  TO anon
  WITH CHECK (status = 'new');
