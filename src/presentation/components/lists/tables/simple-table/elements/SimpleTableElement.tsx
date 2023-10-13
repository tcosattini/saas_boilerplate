import { ISimpleTableElement } from "../interface/simpleTable.interface";

type Props = {
  data: ISimpleTableElement;
};

export default function SimpleTableElement({ data }: Props) {
  return (
    <>
      <tr key={data.email}>
        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
          {data.name}
        </td>
        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {data.title}
        </td>
        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {data.email}
        </td>
        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {data.role}
        </td>
        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
          <a href="#" className="text-light-primary hover:text-indigo-900">
            Edit<span className="sr-only">, {data.name}</span>
          </a>
        </td>
      </tr>
    </>
  );
}
