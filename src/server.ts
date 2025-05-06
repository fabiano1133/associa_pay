import { app } from "./app";
import config from "./infra/config/ApiConfig";

const PORT = config.api.httpPort;

app.listen(PORT, () => console.warn(`Application is Runnig in PORT: ${PORT}`));
