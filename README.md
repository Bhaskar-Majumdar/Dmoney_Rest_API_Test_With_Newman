# Project: Dmoney_Rest_API_Testing

## Project Summary:
DMoney is a demonstration banking platform that simulates financial transactions using virtual currency. The API provides core banking functionalities including - User account creation and management, Virtual fund transfers between accounts, Balance inquiries and transaction history, Role-based access control (admin/agent/customer). Here I have Performed Integration and API Testing of DMoney API Collection.

## Testcase Scenarios:
1. Admin creates - Agent, 2 Random Customers and Merchant.
2. Deposit money from the SYSTEM account to the Agent (Allowed Range 10 TK to 10,000 TK)
3. Agent deposits money to any one Customer.
4. Check Agent balance.
5. Send money from one Customer to another Customer.
6. Withdraw money from a Customer to the Agent (Allowed Range 10 TK to 10,000 TK).
7. Check the Customer's balance and transaction statement by trnxId. 
8. Second Customer makes a payment to the Merchant
9. Second Customer checks both balance and transaction statement. 
10. Check Merchant balance.

## Prerequisite:
1. Tools: Postman, Newman
2. Build tool: npm
3. Language: Javascript
4. Report: newman-reporter-htmlextra
5. IDE: Visual Studio Code

## API Documentation:
https://documenter.getpostman.com/view/25294114/2sB2qgcxQU

## Test Case for this project:
https://docs.google.com/spreadsheets/d/1UgTSd_K55QasgQF855koCgD8S7mUt_SjVHI-3BuwxeE/edit?gid=0#gid=0 

## Newman Report for API Testing:
<img width="754" alt="Screenshot 2025-05-31 at 5 53 31 AM" src="https://github.com/user-attachments/assets/a1f7422f-c2df-4461-83a8-3c7028a66da7" />

<img width="854" alt="Screenshot 2025-05-31 at 10 00 14 PM" src="https://github.com/user-attachments/assets/62e39d1b-7c45-4d4a-a1b9-cb1c97e1b4fd" />

<img width="758" alt="Screenshot 2025-06-01 at 12 21 01 AM" src="https://github.com/user-attachments/assets/e0d68d1a-501e-419d-9c84-b7ee7f694688" />

<img width="755" alt="Screenshot 2025-06-01 at 12 21 17 AM" src="https://github.com/user-attachments/assets/fe88413e-7f89-408d-ac1c-1875dca1141b" />
