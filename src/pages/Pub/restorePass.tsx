import RestorePassForm from "components/forms/restorePassForm";
import NavHeader from "components/navHeader";
import Logo from "components/ui/loader";

export default function RestorePassPage() {
  return (
    <>
      <NavHeader prevAddress="/login" />
      <div className="container mx-auto px-4 pt-3">
        <div className="flex flex-col gap-y-6 items-center">
          <Logo />
          <h1 className="text-2xl text-txt-main text-center w-32">Restore Password</h1>
          <p className="text-xl text-txt-main text-center">
            Enter your email and we`ll send you a letter with a recover link
          </p>
          <RestorePassForm />
        </div>
      </div>
    </>
  );
}
