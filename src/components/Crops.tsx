import monthBars from "../images/month-bars.png";
import strftime from "../vendor/strftime";

const seasonBars = (seasons: number[][]) => {
  const currentDay = parseInt(strftime("%j"));
  const currentYear = new Date().getFullYear();
  const isLeap =
    (currentYear % 4 === 0 && currentYear % 100 !== 0) ||
    currentYear % 400 === 0;
  const dayOfYear = isLeap && currentDay > 59 ? currentDay - 1 : currentDay;

  return (
    <>
      {seasons.sort().map((season, i) => {
        const highlight =
          season[0] <= dayOfYear && dayOfYear <= season[1] ? " in-season" : "";

        const paddingOffset = i === 0 ? 0 : -seasons[i - 1][1];
        const padding = (((season[0] + paddingOffset) / 365.0) * 500).toFixed();
        const width = (((season[1] - season[0]) / 365.0) * 500).toFixed();

        return (
          <div
            className={`season-bar-inner${highlight}`}
            style={{ width: `${width}px`, marginLeft: `${padding}px` }}
          ></div>
        );
      })}
    </>
  );
};

const Crops = ({ crops, search }: { crops: any; search: string }) => {
  const filteredCrops = crops.filter(
    (c: any) => search.length === 0 || c[0].match(search)
  );

  return (
    <table>
      <tbody>
        {filteredCrops
          .sort((a: any, b: any) => (a[0] < b[0] ? -1 : 1)) // sort alphabetically
          .map((crop: any) => (
            <tr key={crop[0]}>
              <td className="name">{crop[0]}</td>
              <td className="bar" style={{ position: "relative" }}>
                <div className="season-bar">
                  <img
                    src={monthBars}
                    className="month-bars"
                    alt="month bars"
                  />
                  {seasonBars(crop[1])}
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Crops;
