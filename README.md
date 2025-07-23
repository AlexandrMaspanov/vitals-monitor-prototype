# 🩺 Vitals Dashboard - Real-Time Health Monitoring UI (Trial Task)

## 📌 Overview

**Vitals Dashboard Component** is a responsive front-end interface for real-time monitoring of vital signs (pulse, blood pressure, heart rate).
It visualizes live data streams, reacts to threshold violations, and allows users to send emergency alerts.
The component’s architecture is designed with scalability, flexibility, and modularity in mind - ensuring the project is extensible.

## 📐 Scope of Responsibility

The component:
- **Displays** vitals data;
- **Responds** to critical values;
- **Allows** the user to trigger an emergency alert (mocked);
- **Adapts** to mobile screens.

Excluded: authentication, vitals history, physical device integration.

---

## 🧱 Architecture: Component & Layer Breakdown

### UI Components

| Component           | Purpose                                             |
|---------------------|-----------------------------------------------------|
| `VitalsDashboard`   | Main container for vitals UI                        |
| `VitalsCard`        | Visualizes a single vital sign                      |
| `AlertsBox`         | Displays warning/critical status                    |
| `EmergencyButton`   | Emergency alert trigger                             |
| `ConfirmationPopup` | Confirmation modal after emergency is triggered     |

### Architectural Layers

1. **Presentation Layer** - UI components
2. **State Layer** - Redux Toolkit (`vitalsSlice`, `alertsSlice`, `emergencySlice`)
3. **Stream Layer** - data stream (mock or WebSocket)
4. **Threshold Logic** - vital ranges and breach detection (`thresholds.js`)
5. **Style Layer** - styling via CSS Modules (`Vitals.module.css`, `Alerts.module.css`, mobile-first layout)

---

## 🔁 Component Lifecycle & Data Flow

| Step                 | Action                                                   |
|----------------------|-----------------------------------------------------------|
| Initialization       | Mock or WebSocket stream starts                           |
| Receiving Data       | JSON payload → `vitalsReceived()` → Redux update          |
| Threshold Check      | `checkAlerts()` runs → alert level assigned               |
| UI Reaction          | Highlights critical vitals, shows alert box               |
| Emergency Trigger    | `triggerEmergency()` dispatches → confirmation popup shown |

---

## 🧠 Redux Slice & State Structure

### `vitalsSlice.js` - Vital Sign State
```js
{
  pulse: number,
  bp: string,
  hr: number,
  lastUpdated: timestamp
}
```
**Actions:** `vitalsReceived()`, `resetVitals()`

### `alertsSlice.js` - Alert & Threshold Logic
```js
{
  isCritical: boolean,
  level: 'normal' | 'warning' | 'critical',
  exceeded: ['pulse', 'bp']
}
```
**Actions:** `checkAlerts()`, `clearAlerts()`

### `emergencySlice.js` - Emergency Workflow
```js
{
  triggered: boolean,
  confirmed: boolean,
  timestamp: datetime
}
```
**Actions:** `triggerEmergency()`, `confirmEmergency()`, `resetEmergency()`

---

## 🎚️ Threshold Logic

`thresholds.js` config defines vital ranges:
```js
export const thresholds = {
  pulse: { min: 50, max: 100 },
  hr: { min: 60, max: 120 },
  bp: {
    systolic: { min: 90, max: 140 },
    diastolic: { min: 60, max: 90 }
  }
};
```

Utilities:

```js
export function isCritical(value, type) {
  const t = thresholds[type];
  if (!t) return false;
  return value < t.min || value > t.max;
}
```

Blood pressure check:
```js
export function checkBp(bpString) {
  const [sys, dia] = bpString.split('/').map(Number);
  const outOfRange = [];
  if (sys < thresholds.bp.systolic.min || sys > thresholds.bp.systolic.max) outOfRange.push('systolic');
  if (dia < thresholds.bp.diastolic.min || dia > thresholds.bp.diastolic.max) outOfRange.push('diastolic');
  return outOfRange.length > 0 ? outOfRange : null;
}
```

---

## 💻 UI Components & Props

### `VitalsCard.jsx`
```js
{
  label: string,
  value: number | string,
  isCritical: boolean
}
```

### `AlertsBox.jsx`
```js
{
  level: 'normal' | 'warning' | 'critical',
  exceeded: string[]
}
```

### `EmergencyButton.jsx`
– uses internal dispatch, no props

### `ConfirmationPopup.jsx`
```js
{
  show: boolean,
  message: string,
  onClose: () => void
}
```

---

## 📱 Styling & Responsiveness

### Principles:
- CSS Modules for scoped component styling
- Mobile-first layout
- Critical colors: `--criticalRed`, `--safeGreen`
- Alert animation: `@keyframes blink`

Example:
```css
.card {
  background-color: var(--safeGreen);
}
.card.critical {
  background-color: var(--criticalRed);
  animation: blink 1s infinite;
}
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}
```

---

## 🆘 Emergency Mechanism

### Flow:
1. `EmergencyButton` clicked → `triggerEmergency()`
2. Auto-confirmed after timeout → `confirmEmergency()`
3. `ConfirmationPopup` shown

Pluggable with real API in future.

---

## 🔄 Data Source: WebSocket or Mock

By default, mock:
```js
function generateMockVitals() {
  return {
    pulse: 70 + Math.floor(Math.random() * 30),
    bp: `${110 + Math.floor(Math.random() * 30)}/${70 + Math.floor(Math.random() * 20)}`,
    hr: 80 + Math.floor(Math.random() * 25)
  };
}
```
Update interval: every 1-2 seconds

Switchable to WebSocket or API mode.

---

## 👥 Roles & Routes

| Role                     | Description                                                |
|--------------------------|------------------------------------------------------------|
| **User / Patient**       | receives monitoring and can send emergency alerts          |
| **Responder / Medic**    | sees alert data, responds to events                        |
| **Administrator**        | manages thresholds, users, and system statistics           |

Role stored in `userSlice`; routing via `<RoleRouter />`.

---

## ⚡ Vite Configuration

Run locally:
```bash
npm run dev
```

Default port: [`http://localhost:5173`](http://localhost:5173)

To set a custom port:
```js
// vite.config.js
export default defineConfig({
  server: {
    port: 3000
  }
});
```

---

## 🎨 Why CSS Modules Are Used

- ✅ Isolated styling scopes per component
- ✅ Easier to refactor and maintain
- ✅ Mobile-first rules embedded per UI block
- ✅ Future-ready: theme systems, dark mode, design tokens
- ✅ Predictable styling across different environments

---

## 🚫 MVP Limitations

- No authentication
- No vitals/alerts history
- No real API or data backend
- No responder/admin role implementation yet

---

## 🔮 Future Expansion

- Integration with physical devices (Arduino, ESP32)
- Real WebSocket data flow
- Vitals history and alerts logging
- AI-powered risk and trend analysis
- Role-based routing and dashboards
- Mobile client with React Native
- Backoffice integration (Slack, Notion)

---

## 📁 Project Structure

```
src/
├── app/                // store.js
├── features/
│   ├── vitals/         // VitalsDashboard, VitalsCard, slice, styles
│   ├── alerts/         // AlertsBox, alertsSlice
│   └── controls/       // EmergencyButton, ConfirmationPopup, slice
├── services/           // VitalsStreamService
├── utils/              // thresholds, isCritical
├── slices/             // Redux Toolkit store
├── styles/             // CSS Modules
```

---

✅ Component ready for trial submission - demonstrating real-time UI responsiveness, clean architecture, and extensibility.
