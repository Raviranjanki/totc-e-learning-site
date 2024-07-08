import Dropdown from './ui/dropdown';

export default function Profile({ dropdown = true }: { dropdown: boolean }) {
  return (
    <div className="flex gap-3 items-center">
      <div className="h-10 object-cover">
        <img className="h-full" src="/public/profile.png" alt="" />
      </div>
      {dropdown ? <Dropdown /> : <span>Lina</span>}
    </div>
  );
}
