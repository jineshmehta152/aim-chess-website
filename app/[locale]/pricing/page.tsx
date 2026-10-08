import { redirect } from "next/navigation";

type Props = {
  params: {
    locale: string;
  };
};

export default function PricingRedirect({ params }: Props) {
  const { locale } = params;
  redirect(`/${locale}/why-choose-us`);
}
