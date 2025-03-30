
### 🎯 **Goal Recap:**  
- Build APIs for generating metadata.
- Add subscription/payment logic.
- Integrate with the frontend seamlessly.

---

## 🛠️ **Backend Plan**

### 1. **Core API Structure**
- **Framework:** Next.js API Routes (Fast, No Extra Setup).
- **Folder Structure:**
```
/api
├── /auth
│   └── login.js (NextAuth config)
├── /metadata
│   ├── generate.js (Form data → Basic metadata)
│   └── ai-generate.js (AI-powered metadata generation)
├── /user
│   └── profile.js (Get user plan, usage)
└── /payment
    ├── subscribe.js (Create subscription)
    └── webhook.js (Stripe webhook for payment status)
```

---

### 2. **Authentication & User Management**
- **NextAuth.js:** Google/GitHub OAuth.
- **User Schema:**
```js
{
  _id: ObjectId,
  email: String,
  plan: "free" | "pro",
  apiUsage: Number,
  createdAt: Date,
}
```

---

### 3. **Metadata Generation APIs**
✅ **/api/metadata/generate.js**  
- Input: Site URL + Manual Data.  
- Output: robots.txt, sitemap.xml, manifest.json.  

✅ **/api/metadata/ai-generate.js** (Pro Plan)  
- Input: Site URL.  
- Process: Crawl site → Analyze content → Generate AI-enriched metadata.  
- Output: AI-enhanced metadata JSON.  

---

### 4. **Payment & Subscription Logic**
✅ **Stripe Integration**
- One-time Payment (Launch Plan)
- Subscription Later (Scale Plan)
- **Webhooks:** To auto-update user plans after payment.

---

### 5. **Admin & Dashboard APIs**
- **/api/user/profile.js:** Get user profile + plan.
- **/api/payment/subscribe.js:** Create payment session.
- **/api/payment/webhook.js:** Handle payment confirmations.