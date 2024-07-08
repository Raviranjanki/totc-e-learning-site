import Dropdown from './ui/dropdown';

export default function Profile() {
  return (
    <div className="flex gap-3 items-center">
      <div className="h-10 object-cover">
        <img className="h-full" src="/public/profile.png" alt="" />
      </div>
      <Dropdown />
    </div>
  );
}
