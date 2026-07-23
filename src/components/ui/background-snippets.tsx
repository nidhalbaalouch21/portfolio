import React from 'react';

export const BackgroundSnippets = () => {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-black">
      {/* Grid line effect adapted for dark theme with light blue lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(128,165,226,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,165,226,0.05)_1px,transparent_1px)] bg-[size:6rem_4rem]" />
      
      {/* Light blue radial gradient matching the requested theme */}
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(128,165,226,0.15),transparent)]" />
    </div>
  );
};

export const BackgroundDemo = () => {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,rgba(128,165,226,0.2)_100%)]"></div>
  );
};
