import Input from "../Forms/Input";
import Button from "../Forms/Button";
import { Search, Filter } from "lucide-react";

export default function SearchFilterBar({ placeholder }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
      <Input placeholder={placeholder} icon={<Search size={18} />} size="md" />
      <Button
        label="Filter"
        icon={<Filter size={16} />}
        outline
        color="gray"
        className="w-full sm:w-auto"
      />
    </div>
  );
}
