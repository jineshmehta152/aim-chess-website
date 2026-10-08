import { redirect } from "next/navigation";

type Props = {
  params: {
    locale: string;
  };
};

export default function ActivitiesRedirect({ params }: Props) {
  const { locale } = params;
  redirect(`/${locale}/achievements`);
}
