import { redirect } from "next/navigation";

type Props = {
  params: {
    locale: string;
  };
};

export default function PartiesRedirect({ params }: Props) {
  const { locale } = params;
  redirect(`/${locale}/courses`);
}
