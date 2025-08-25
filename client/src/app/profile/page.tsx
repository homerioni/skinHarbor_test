import { Breadcrumbs } from '@/ui';
import { BREADCRUMBS } from '@/constants/routes';
import { Profile } from '@/components/Profile';

export default async function ProfilePage() {
  return (
    <>
      <Breadcrumbs items={BREADCRUMBS.profile} />
      <Profile />
    </>
  );
}
