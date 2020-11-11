import logo from "./logo.svg";
import "./App.css";

function App() {
  const dataImage = [
    {
      url:
        "https://images.squarespace-cdn.com/content/v1/5a5906400abd0406785519dd/1534530600391-CTOG7HCYJJIHHLNLZLNI/ke17ZwdGBToddI8pDm48kGPVK--wGoWXJsqwlxbZlQN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5enfxu_O4VeONvneR-F6W8oeFhFqSrYyNrfPB9Y70_gvQ/IYORBank_CoralReefs_AlexMustard_01.jpg?format=500w",
      name: "firstImage",
      location: " bangalore",
    },
    {
      url:
        "https://images.squarespace-cdn.com/content/v1/5a5906400abd0406785519dd/1534530600391-CTOG7HCYJJIHHLNLZLNI/ke17ZwdGBToddI8pDm48kGPVK--wGoWXJsqwlxbZlQN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5enfxu_O4VeONvneR-F6W8oeFhFqSrYyNrfPB9Y70_gvQ/IYORBank_CoralReefs_AlexMustard_01.jpg?format=500w",
      name: "secondImage",
      location: " pune",
    },
    {
      url:
        "https://images.squarespace-cdn.com/content/v1/5a5906400abd0406785519dd/1534530600391-CTOG7HCYJJIHHLNLZLNI/ke17ZwdGBToddI8pDm48kGPVK--wGoWXJsqwlxbZlQN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5enfxu_O4VeONvneR-F6W8oeFhFqSrYyNrfPB9Y70_gvQ/IYORBank_CoralReefs_AlexMustard_01.jpg?format=500w",
      name: "thirdImage",
      location: " ranchi",
    },
    {
      url:
        "https://images.squarespace-cdn.com/content/v1/5a5906400abd0406785519dd/1534530600391-CTOG7HCYJJIHHLNLZLNI/ke17ZwdGBToddI8pDm48kGPVK--wGoWXJsqwlxbZlQN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5enfxu_O4VeONvneR-F6W8oeFhFqSrYyNrfPB9Y70_gvQ/IYORBank_CoralReefs_AlexMustard_01.jpg?format=500w",
      name: "fourthImage",
      location: " mumbai",
    },
  ];

  const searchHandle = (e) => {
    dataImage.filter((d, i) => {
      if (d.name === e.target.value) {
        return (
          <div key={i}>
            <ul>
              <img src={d.url} alt="image can't be loaded" />
            </ul>
            <ul>{d.location}</ul>
            <ul>{d.name}</ul>
          </div>
        );
      }
    });
  };

  const displayImage = dataImage.map((d, i) => {
    return (
      <div key={i}>
        <ul>
          <img src={d.url} alt="image can't be loaded" />
        </ul>
        <ul>{d.location}</ul>
        <ul>{d.name}</ul>
      </div>
    );
  });

  return (
    <div className="App">
      <div className="App-header">
        <input type="text" onChange={(e) => searchHandle(e)} />

        {displayImage}
      </div>
    </div>
  );
}

export default App;
