import LayoutWrapper from '@/@page-sections/layouts/LayoutWrapper';
import AppFooter from '@/components/footer/AppFooter';
import { createBrowserClient } from '@/lib/supabase';
import AppProviders from '@/providers/AppStateProvider';
import SupabaseListener from '@/providers/SupabaseListener';
import SupabaseProvider from '@/providers/SupabaseProvider';
import '@/styles/demo/Demos.scss';
import '@/styles/layout/layout.scss';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createBrowserClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="en">
      <head />
      <body>
        <AppProviders>
          <SupabaseProvider session={session}>
            <SupabaseListener />
            <LayoutWrapper>{children}</LayoutWrapper>
            <AppFooter />
          </SupabaseProvider>
        </AppProviders>
      </body>
    </html>
  );
}
