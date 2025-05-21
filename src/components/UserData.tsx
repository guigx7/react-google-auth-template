interface Props {
  name: string;
  email: string;
  picture: string;
}

export function UserData({ name, email, picture }: Props) {
  return (
    <div className="flex flex-col items-center">
      <img src={picture} alt={name} className="w-24 h-24 rounded-full" />
      <h2 className="mt-4 text-xl font-semibold">{name}</h2>
      <p className="mt-2 text-gray-600">{email}</p>
    </div>
  );
}
