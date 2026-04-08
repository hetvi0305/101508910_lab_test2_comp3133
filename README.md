# SpaceX Mission Launch Application

**Course:** COMP 3133
**Student Name:** Hetvi Patel
**Student ID:** 101508910

---

## Project Overview

This project is an Angular application that displays SpaceX mission launches using the public SpaceX REST API. The application allows users to view all missions, filter them based on different criteria, and view detailed information about each mission.

---

## Features Implemented

### 1. Mission List

* Displays all SpaceX missions
* Shows:

  * Flight Number
  * Mission Name
  * Launch Year
  * Mission Details
  * Mission Patch Image

---

### 2. Mission Filter

* Users can filter missions by:

  * Launch Year
  * Successful Launch (True/False)
  * Successful Landing (True/False)
* Selected filters are highlighted for better user experience

---

### 3. Mission Details Page

* Displays detailed information for a selected mission:

  * Mission Name
  * Flight Number
  * Launch Year
  * Rocket Name & Type
  * Launch Site
  * Launch Details
  * Mission Patch Image
  * External Links:

    * Article
    * Wikipedia
    * Video

---

### 4. Routing

* `/` → Mission List
* `/mission/:id` → Mission Details

---

### 5. API Integration

* Data fetched from SpaceX REST API:

  * https://api.spacexdata.com/v3/launches

---

### 6. Angular Features Used

* Standalone Components (Angular 17+)
* Routing with `app.routes.ts`
* HttpClient with `provideHttpClient`
* EventEmitter for component communication
* Structural directives (`*ngFor`, `*ngIf`)

---

## Technologies Used

* Angular (Standalone Architecture)
* TypeScript
* HTML & CSS
* Angular Material (for UI components)
* SpaceX REST API

---

## Project Structure

```
src/
 └── app/
      ├── missionlist/
      ├── missiondetails/
      ├── missionfilter/
      ├── network/
      │    └── spacexapi.ts
      ├── models/
      ├── app.routes.ts
      └── app.config.ts
```
---
## Application Screenshots

### Mission List:
<img width="1899" height="965" alt="Screenshot 2026-04-08 142014" src="https://github.com/user-attachments/assets/62bc3f99-0cce-4f3e-b29f-3e828a23c9f9" />
<img width="1897" height="966" alt="Screenshot 2026-04-08 135504" src="https://github.com/user-attachments/assets/8a88326d-307e-464c-b370-7402a223dac0" />

### Mission Details:
<img width="1901" height="971" alt="Screenshot 2026-04-08 142050" src="https://github.com/user-attachments/assets/b2606c3f-0585-4b95-a0a1-dfa79cddb434" />


---

##  How to Run the Application

### Step 1: Install Dependencies

```
npm install
```

### Step 2: Run Application

```
ng serve
```

### Step 3: Open in Browser

```
http://localhost:4200
```

---

## Deployment

The application is deployed using Vercel.

🔗 **Live URL:** (https://101508910-lab-test2-comp3133-three.vercel.app/)

---

## Notes / Challenges

* Angular 17 standalone architecture required different setup (no app.module.ts)
* SpaceX API filtering sometimes returned inconsistent results, so local filtering was implemented for reliability
* Routing issues were resolved using `paramMap` subscription

---

## Future Improvements

* Add loading spinner instead of text
* Add reset filters button
* Improve UI with more Angular Material components
* Add pagination for missions

---

## Conclusion

This project successfully demonstrates the use of Angular to build a dynamic web application that consumes a REST API, implements filtering, routing, and interactive UI components.

---
