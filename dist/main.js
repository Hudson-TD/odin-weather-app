(()=>{"use strict";console.log("Build Successful");const e=document.getElementById("today");!async function(){const t=await fetch("https://api.weatherapi.com/v1/current.json?key=4f50ace2a7ae426aa70182519232509&q=atlanta");!function(t){let n=document.createElement("h3");n.innerText=`${t.location.name}, ${t.location.region}`;let c=document.createElement("p");c.innerText=`${t.current.last_updated}`;let r=document.createElement("p");r.innerText=function(e){switch(e){case 0:return"Monday";case 1:return"Tuesday";case 2:return"Wednesday";case 3:return"Thursday";case 4:return"Friday";case 5:return"Saturday";case 6:return"Sunday"}}(t.current.is_day);let a=document.createElement("img");a.src=`${t.current.condition.icon}`;let u=document.createElement("p");u.innerText=`${t.current.condition.text}`;let o=document.createElement("p");o.innerText=`${t.current.feelslike_f} °F`;let i=document.createElement("p");i.innerText=`${t.current.humidity} %`,e.append(n,c,r,u,a,o,i)}(await t.json())}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQUFBLFFBQVFDLElBQUksb0JBSVosTUFFTUMsRUFBaUJDLFNBQVNDLGVBQWUsVUE2Qi9DQyxpQkFDRSxNQUFNQyxRQUFnQkMsTUFDcEIsNkZBN0JKLFNBQTZCQyxHQUMzQixJQUFJQyxFQUFXTixTQUFTTyxjQUFjLE1BQ3RDRCxFQUFTRSxVQUFZLEdBQUdILEVBQVlDLFNBQVNHLFNBQVNKLEVBQVlDLFNBQVNJLFNBQzNFLElBQUlDLEVBQWFYLFNBQVNPLGNBQWMsS0FDeENJLEVBQVdILFVBQVksR0FBR0gsRUFBWU8sUUFBUUMsZUFDOUMsSUFBSUMsRUFBY2QsU0FBU08sY0FBYyxLQUN6Q08sRUFBWU4sVUNkQyxTQUFzQk8sR0FDbkMsT0FBUUEsR0FDTixLQUFLLEVBQ0gsTUFBTyxTQUVULEtBQUssRUFDSCxNQUFPLFVBRVQsS0FBSyxFQUNILE1BQU8sWUFFVCxLQUFLLEVBQ0gsTUFBTyxXQUVULEtBQUssRUFDSCxNQUFPLFNBRVQsS0FBSyxFQUNILE1BQU8sV0FFVCxLQUFLLEVBQ0gsTUFBTyxTQUtiLENEWjBCQyxDQUFhWCxFQUFZTyxRQUFRSyxRQUN6RCxJQUFJQyxFQUFlbEIsU0FBU08sY0FBYyxPQUMxQ1csRUFBYUMsSUFBTSxHQUFHZCxFQUFZTyxRQUFRUSxVQUFVQyxPQUNwRCxJQUFJQyxFQUFnQnRCLFNBQVNPLGNBQWMsS0FDM0NlLEVBQWNkLFVBQVksR0FBR0gsRUFBWU8sUUFBUVEsVUFBVUcsT0FDM0QsSUFBSUMsRUFBUXhCLFNBQVNPLGNBQWMsS0FDbkNpQixFQUFNaEIsVUFBWSxHQUFHSCxFQUFZTyxRQUFRYSxpQkFDekMsSUFBSUMsRUFBVzFCLFNBQVNPLGNBQWMsS0FDdENtQixFQUFTbEIsVUFBWSxHQUFHSCxFQUFZTyxRQUFRYyxhQUU1QzNCLEVBQWU0QixPQUNickIsRUFDQUssRUFDQUcsRUFDQVEsRUFDQUosRUFDQU0sRUFDQUUsRUFFSixDQVNFRSxPQUhtQnpCLEVBQVEwQixPQUk3QixDQVlBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL3V0aWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKFwiQnVpbGQgU3VjY2Vzc2Z1bFwiKTtcblxuaW1wb3J0IHBhcnNlV2Vla2RheSBmcm9tIFwiLi91dGlsc1wiO1xuXG5jb25zdCBXRUFUSEVSX0FQSV9LRVkgPSBwcm9jZXNzLmVudi5XRUFUSEVSX0FQSV9LRVk7XG5cbmNvbnN0IHRvZGF5Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RheVwiKTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVXZWF0aGVyQ2FyZCh3ZWF0aGVyRGF0YSkge1xuICBsZXQgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGxvY2F0aW9uLmlubmVyVGV4dCA9IGAke3dlYXRoZXJEYXRhLmxvY2F0aW9uLm5hbWV9LCAke3dlYXRoZXJEYXRhLmxvY2F0aW9uLnJlZ2lvbn1gO1xuICBsZXQgbGFzdFVwZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBsYXN0VXBkYXRlLmlubmVyVGV4dCA9IGAke3dlYXRoZXJEYXRhLmN1cnJlbnQubGFzdF91cGRhdGVkfWA7XG4gIGxldCB3ZWVrZGF5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB3ZWVrZGF5VGV4dC5pbm5lclRleHQgPSBwYXJzZVdlZWtkYXkod2VhdGhlckRhdGEuY3VycmVudC5pc19kYXkpO1xuICBsZXQgY29uZGl0aW9uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY29uZGl0aW9uSW1nLnNyYyA9IGAke3dlYXRoZXJEYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb259YDtcbiAgbGV0IGNvbmRpdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uZGl0aW9uVGV4dC5pbm5lclRleHQgPSBgJHt3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0fWA7XG4gIGxldCB0ZW1wRiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0ZW1wRi5pbm5lclRleHQgPSBgJHt3ZWF0aGVyRGF0YS5jdXJyZW50LmZlZWxzbGlrZV9mfSBcXHUwMEIwRmA7XG4gIGxldCBodW1pZGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBodW1pZGl0eS5pbm5lclRleHQgPSBgJHt3ZWF0aGVyRGF0YS5jdXJyZW50Lmh1bWlkaXR5fSAlYDtcblxuICB0b2RheUNvbnRhaW5lci5hcHBlbmQoXG4gICAgbG9jYXRpb24sXG4gICAgbGFzdFVwZGF0ZSxcbiAgICB3ZWVrZGF5VGV4dCxcbiAgICBjb25kaXRpb25UZXh0LFxuICAgIGNvbmRpdGlvbkltZyxcbiAgICB0ZW1wRixcbiAgICBodW1pZGl0eVxuICApO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyVG9kYXkoKSB7XG4gIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0ke1dFQVRIRVJfQVBJX0tFWX0mcT1hdGxhbnRhYFxuICApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG5cbiAgLy9jb25zb2xlLmxvZyhkYXRhKTtcbiAgZ2VuZXJhdGVXZWF0aGVyQ2FyZChkYXRhKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0VGhyZWVEYXlGb3JlY2FzdCgpIHtcbiAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke1dFQVRIRVJfQVBJX0tFWX0mcT1hdGxhbnRhJmRheXM9M2BcbiAgKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xufVxuXG4vL2dldFdlYXRoZXJUb2RheSgpO1xuZ2V0V2VhdGhlclRvZGF5KCk7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZVdlZWtkYXkodmFsdWUpIHtcbiAgc3dpdGNoICh2YWx1ZSkge1xuICAgIGNhc2UgMDpcbiAgICAgIHJldHVybiBcIk1vbmRheVwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIFwiVHVlc2RheVwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIFwiV2VkbmVzZGF5XCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDM6XG4gICAgICByZXR1cm4gXCJUaHVyc2RheVwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA0OlxuICAgICAgcmV0dXJuIFwiRnJpZGF5XCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDU6XG4gICAgICByZXR1cm4gXCJTYXR1cmRheVwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA2OlxuICAgICAgcmV0dXJuIFwiU3VuZGF5XCI7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwidG9kYXlDb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYXN5bmMiLCJyZXF1ZXN0IiwiZmV0Y2giLCJ3ZWF0aGVyRGF0YSIsImxvY2F0aW9uIiwiY3JlYXRlRWxlbWVudCIsImlubmVyVGV4dCIsIm5hbWUiLCJyZWdpb24iLCJsYXN0VXBkYXRlIiwiY3VycmVudCIsImxhc3RfdXBkYXRlZCIsIndlZWtkYXlUZXh0IiwidmFsdWUiLCJwYXJzZVdlZWtkYXkiLCJpc19kYXkiLCJjb25kaXRpb25JbWciLCJzcmMiLCJjb25kaXRpb24iLCJpY29uIiwiY29uZGl0aW9uVGV4dCIsInRleHQiLCJ0ZW1wRiIsImZlZWxzbGlrZV9mIiwiaHVtaWRpdHkiLCJhcHBlbmQiLCJnZW5lcmF0ZVdlYXRoZXJDYXJkIiwianNvbiIsImdldFdlYXRoZXJUb2RheSJdLCJzb3VyY2VSb290IjoiIn0=