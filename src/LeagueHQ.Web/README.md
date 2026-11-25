# LeagueHQ Web

The frontend of LeagueHQ is built using React, TypeScript and Vite.

## Running Locally

### Starting the Frontend
From the LeagueHQ repository root, navigate to the frontend directory:
```bash
cd src/LeagueHQ.Web
npm run dev
```

The frontend will typically be available at http://localhost:5173.

Note: The ASP.NET Core backend runs separately and must be started to retrieve the backend health status.
### Starting the Backend
From the LeagueHQ repository root, navigate to the backend directory:
```bash
cd src/LeagueHQ.Api
dotnet run
```

The backend will typically run on port 5198

### Additional Notes

#### Development Commands
Run the following commands from the src/LeagueHQ.Web directory

The following command checks frontend code for potential issues and violations of configured coding rules.
```bash
npm run lint
```
The following command checks TypeScript and generates the production build.
```bash
npm run build
```
#### Current Functionality

LeagueHQ is a work in progress. Currently, the frontend calls /api/health and displays Healthy or Unavailable.