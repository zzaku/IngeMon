import icon from "../eclairci.png";
import { useEffect } from "react";
import "../Mon-style/Api.css";

function Cpu({
  postChild,
  btnChild,
  setDataArray,
  setDataArray1,
  setDataArray2,
  setPostChild,
}) {
  useEffect(() => {
    postChild.map((elem) => {
      btnChild === "CPU" &&
        setDataArray({
          labels: ["tâche en cours", "Processus"],
          datasets: [
            {
              label: "STATS CPU",
              data: [
                elem.api[0].performance.cpu.threads,
                elem.api[0].performance.cpu.process,
              ],
              backgroundColor: ["red", "green"],
            },
          ],
        });
      btnChild === "CPU" &&
        setDataArray1({
          labels: ["Vitesse"],
          datasets: [
            {
              label: "STATS CPU",
              data: [elem.api[0].performance.cpu.speed],
              backgroundColor: ["blue"],
            },
          ],
        });
      btnChild === "CPU" &&
        setDataArray2({
          labels: ["Utilisation du processeur"],
          datasets: [
            {
              label: "STATS CPU",
              data: [elem.api[0].performance.cpu.use],
              backgroundColor: ["black"],
            },
          ],
        });
    });
  }, [btnChild, postChild]);

  return (
    <>
      {postChild.map((elem) => (
        <div className="api_container">
          <div className="api_container_texte">
            Utilisation du processeur (en %) : {elem.api[0].performance.cpu.use}{" "}
            %
          </div>
          <div className="api_container_texte">
            Tâches : {elem.api[0].performance.cpu.threads}
          </div>
          <div className="api_container_texte">
            Vitesse (en Ghz) : {elem.api[0].performance.cpu.speed} Ghz
          </div>
          <div className="api_container_texte">
            Processus en cours : {elem.api[0].performance.cpu.process}
          </div>
        </div>
      ))}
    </>
  );
}

export default Cpu;
