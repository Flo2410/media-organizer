import { FileSelect } from "@components/FileSelect";
import { FileList } from "@components/FileList";

export default function Home() {
  return (
    <div className="flex h-screen flex-col p-2">
      <FileSelect />
      <FileList />
    </div>
  );
}
