import { type ReactElement } from "react";
const Main = ({
  children,
}: {
  children: ReactElement | ReactElement[];
}): ReactElement | ReactElement[] => {
  return (
    <main className="w-[min(1440px,100%-3rem)] py-10 mx-auto flex flex-col min-h-full gap-5 sm:flex-row">
      {children}
    </main>
  );
};

export default Main;
