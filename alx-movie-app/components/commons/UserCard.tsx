import { type AddressProps } from "@/interfaces";

import { type UserProps } from "@/interfaces";
import { SpanWithLabelCard } from "./SpanWithLabel";

const UserCard: React.FC<UserProps> = ({ id, name, email, address }) => {
  return (
    <div className="bg-white grid cursor-pointer outline-2 *:not-first:not-last:border-b *:not-first:not-last:pb-4 *:not-first:not-last:border-b-sky-300 outline-sky-600 text-gray-800 px-2 py-4 rounded-xl shadow hover:-translate-y-1 transition-transform duration-200 ease-linear">
      <h1 className="text-lg text-sky-600 font-semibold">{name}</h1>

      <Contact email={email} />
      <Address address={address} />

      <span className="ml-auto block w-fit px-2 py-1">user: {id}</span>
    </div>
  );
};

function Contact({ email }: Pick<UserProps, "email">) {
  return (
    <section className="grid gap-1 my-4">
      <h2 className="font-semibold text-black text-lg">Contact</h2>

      <ul className="grid grid-cols-2 gap-2 px-2 py-1 rounded-md *:grid *:gap-0.5 *:*:first:font-semibold *:*:first:text-sm">
        <SpanWithLabelCard
          id={`email:${email}`}
          title="Email"
          content={email}
        />
      </ul>
    </section>
  );
}
function Address({
  address: { street, geo, city, suite, zipCode },
}: {
  address: AddressProps;
}) {
  return (
    <section className="grid gap-1 my-4">
      <h2 className="font-semibold text-black text-lg">Address</h2>

      <ul className="grid grid-cols-2 gap-2 px-2 py-1 rounded-md *:grid *:gap-0.5 *:*:first:font-semibold *:*:first:text-sm">
        <SpanWithLabelCard
          id={`street:${street}`}
          title="Street"
          content={street}
        />
        <SpanWithLabelCard
          id={`suite:${suite}`}
          title="Suite"
          content={suite}
        />
        <SpanWithLabelCard id={`city:${city}`} title="City" content={city} />

        {zipCode && (
          <SpanWithLabelCard
            id={`zipCode:${zipCode}`}
            title="Zzpcode"
            content={zipCode}
          />
        )}

        <li className="col-span-full">
          <span id={`geo:${street}`}>Geo location:</span>
          <div
            aria-labelledby={`geo:${street}`}
            className="grid grid-cols-2 gap-2"
          >
            <span>LAT: {geo.lat}</span>
            <span>LNG: {geo.lng}</span>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default UserCard;
