import { statistics } from "@/app/lib/definitions";
export default async function Statistique({statistics}:{statistics:statistics[]}) {
    return (
        <div>
            <h1>Statistique</h1>
          <div className="bg-white px-6">
        <ul>
            <div className="border-2 border-gray-200 w-full">
            {statistics.map((statistic) => (
                <li key={statistic.id} className="flex items-center justify-between border-b border-gray-200 py-4 w-full">
                  {statistic.solde} {statistic.designation}
                </li>
            ))}
            </div>
        </ul>
          </div>
        </div>
    );
}