const NoMails = () => {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      <img src="/mailbox-graphic.svg" width={128} height={170} alt="Mailbox" />
      <div className="pt-2 text-center text-sm text-gray-400">
        You have no emails with this label
      </div>
    </div>
  );
};

export default NoMails;
