import type { Metadata } from 'next';
import { Nunito, Nunito_Sans } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Modal } from '@/components/ui/Modal';
import './globals.css';
import 'swiper/css';
import { getServerSession } from 'next-auth';
import { getAuthOptions } from '@/session/auth';
import { getUser } from '@/services/user';

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
});

const nunitoSans = Nunito_Sans({
  variable: '--font-nunito-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Skin Harbor',
  description: 'Skin Harbor',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(getAuthOptions());
  const user = session?.user?.strapiId ? await getUser(session.user.strapiId) : null;

  return (
    <html lang="en">
      <body className={`${nunito.variable} ${nunitoSans.variable}`} id="body">
        <Header session={session} user={user} />
        <main>{children}</main>
        <Footer />

        <Modal />
      </body>
    </html>
  );
}
