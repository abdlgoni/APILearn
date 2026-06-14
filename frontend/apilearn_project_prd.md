# Project Requirements Document: APILearn

## 1. Project Overview
**APILearn** is an educational API testing platform designed specifically for IT students and self-learners. Unlike traditional tools like Postman or Insomnia, APILearn focuses on **why** requests succeed or fail, providing plain-language explanations and guided learning paths.

## 2. Target Audience
*   **Primary**: IT Students and Beginner Developers.
*   **Secondary**: Self-taught learners and educators.
*   **Tone**: Friendly, educational, and non-intimidating.

## 3. Core Features

### 3.1. API Tester (Home)
*   **Request Builder**: Support for HTTP methods (GET/POST initially), URL input, customizable Headers (Key-Value), and Request Body (JSON).
*   **Response Viewer**: Real-time display of response status codes, syntax-highlighted JSON, and plain-language explanations of results.
*   **Educational Tooltips**: Interactive "?" icons on all form fields that reveal technical concepts explained in simple Indonesian.

### 3.2. Guided Scenarios
*   **Step-by-Step Learning**: Interactive modules that guide users through common API patterns (e.g., Authentication).
*   **Error Analysis**: Specific coaching when errors occur (like 401 Unauthorized), explaining the missing requirements.
*   **Comparison View**: A unique "Before and After" visualizer that shows the difference between a failed request and a successful one after applying the correct fix.

### 3.3. Project Management
*   **Collections**: Ability to group related requests.
*   **History**: A record of previous requests for quick recall.
*   **Variables**: Management of environment variables (like API keys).

## 4. Design & Visual Identity
The project has evolved from a dark navy theme to a high-energy **Neobrutalist** aesthetic.

*   **Style**: Bold 3px black borders, hard shadows, and high-contrast surfaces.
*   **Colors**:
    *   **Surface**: #f9f9f9 (Off-white)
    *   **Primary Accent**: #ffe600 (Vibrant Yellow)
    *   **Interactive Elements**: #7F77DD (Soft Purple)
    *   **Status Colors**: Green (Success), Coral (Error), Amber (Warning).
*   **Typography**: Hanken Grotesk (Bold/Extra Bold for hierarchy).
*   **Layout**: Two-panel split on desktop; stacked single-column on mobile.

## 5. Technical Constraints
*   **Language**: All UI labels and educational content must be in **Indonesian**.
*   **Responsiveness**: Must be fully functional on both Desktop and Mobile devices.
*   **JSON View**: Must support syntax highlighting for data types (Strings, Numbers, Booleans).

## 6. Success Metrics
*   User completion of Guided Scenarios.
*   Reduction in "trial-and-error" time for beginners understanding status codes.
*   Positive feedback on the "Educational Tooltip" utility.
