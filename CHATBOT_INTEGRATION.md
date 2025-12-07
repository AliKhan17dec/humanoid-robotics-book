# Chatbot Integration Guide

This guide explains how the chatbot widget has been integrated into your Docusaurus book and how to configure it for your environment.

## 📁 Files Created

### Component Files
- `src/components/ChatbotWidget/ChatbotWidget.tsx` - Main React component for the chat widget
- `src/components/ChatbotWidget/ChatbotWidget.module.css` - Styling for the widget
- `src/components/ChatbotWidget/index.ts` - Export file
- `src/theme/Root.tsx` - Root layout wrapper

## 🎨 Features

✅ **Beautiful UI**
- Floating chat button in bottom-right corner
- Smooth animations and transitions
- Gradient colors matching modern design
- Responsive on all devices

✅ **Full Chat Functionality**
- Real-time message exchange
- Typing indicator while bot responds
- Message timestamps
- Source attribution with details
- Session tracking

✅ **User Experience**
- Auto-scroll to latest messages
- Keyboard support (Enter to send)
- Loading states
- Error handling
- Mobile-friendly

## 🚀 Setup Instructions

### Step 1: Ensure Backend is Running

```bash
cd /Users/ammadkhan/coding/giaic-robotics-book-hackathon/chatbot/backend
source venv/bin/activate
python main.py
```

Backend should be running on `http://localhost:8000`

### Step 2: Update CORS Configuration (if needed)

If you're running Docusaurus on a different port, update the backend CORS settings:

**File**: `chatbot/backend/.env`

```env
CORS_ORIGINS=http://localhost:3000,http://localhost:5173
```

Add your Docusaurus port if different.

### Step 3: Start Docusaurus Development Server

```bash
cd /Users/ammadkhan/coding/giaic-robotics-book-hackathon/humanoid-robotics-book
npm install  # If you haven't already
npm start
```

Docusaurus will start on `http://localhost:3000` (or next available port)

### Step 4: Test the Chatbot

1. Open `http://localhost:3000` in your browser
2. Look for the purple chat button in the bottom-right corner
3. Click it to open the chat dialog
4. Ask a question like "What is ROS 2?"
5. The bot should respond with information from the book

## 🔧 Configuration

### Backend URL

If you change where the backend runs, update the fetch URL in `ChatbotWidget.tsx`:

```typescript
const response = await fetch('http://your-backend-url:port/chat/query', {
```

### Styling

Customize the widget appearance by editing `ChatbotWidget.module.css`:

- **Colors**: Search for `#667eea` and `#764ba2` to change the gradient
- **Size**: Modify `.chatDialog` width/height for different dimensions
- **Position**: Change `bottom` and `right` in `.chatbotContainer` to reposition

### Exclude from Pages

Edit `src/theme/Root.tsx` to exclude the chatbot from specific pages:

```typescript
const excludePaths = ['/404.html', '/docs/some-page'];
```

## 🌐 Production Deployment

### Update API Endpoints

Before deploying to production:

1. Update `ChatbotWidget.tsx` to use your production backend URL
2. Update `docusaurus.config.ts` if needed
3. Ensure CORS is properly configured for your domain

### Example for Production

**In ChatbotWidget.tsx:**
```typescript
const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';
const response = await fetch(`${backendUrl}/chat/query`, {
```

**In docusaurus.config.ts:**
```typescript
const config: Config = {
  // ... other config
  customFields: {
    backendUrl: process.env.BACKEND_URL || 'http://localhost:8000',
  },
};
```

## 📱 Mobile Responsive

The chatbot widget is fully responsive:
- On mobile, it takes up most of the screen width
- Touch-friendly buttons and input
- Auto-scaling chat dialog

## 🐛 Troubleshooting

### Issue: "Backend server is running" error

**Solution**: Make sure:
1. Backend FastAPI server is running: `python main.py`
2. Check backend is on `http://localhost:8000`
3. Check CORS is configured correctly in `.env`

### Issue: Chat button not appearing

**Solution**: 
1. Clear browser cache (Ctrl+Shift+Delete)
2. Hard refresh the page (Ctrl+Shift+R)
3. Check browser console for errors (F12)

### Issue: Messages not sending

**Solution**:
1. Open browser DevTools (F12)
2. Check Network tab for failed requests
3. Verify backend is responding to requests

### Issue: Slow responses

**Solution**:
1. Ensure documents are indexed: `curl -X POST http://localhost:8000/chat/index`
2. Check backend logs for errors
3. Verify Qdrant connection is working

## 📚 API Reference

The chatbot calls the following backend endpoint:

```
POST /chat/query
Content-Type: application/json

{
  "question": "Your question here",
  "session_id": "unique-session-id"
}

Response:
{
  "answer": "Generated answer from the book",
  "sources": [
    {
      "title": "Source title",
      "content": "Excerpt from the book",
      "similarity_score": 0.85,
      "metadata": { ... }
    }
  ],
  "session_id": "unique-session-id",
  "timestamp": "2025-12-07T11:30:00"
}
```

## 📖 Next Steps

1. **Customize Styling**: Update colors, fonts, sizes in `ChatbotWidget.module.css`
2. **Add Authentication**: Implement user login if needed
3. **Analytics**: Track user questions for insights
4. **Personalization**: Store user preferences in localStorage
5. **Advanced Features**: Add rating system, feedback collection

## 🎓 Learn More

- [Docusaurus Theme Swizzling](https://docusaurus.io/docs/swizzling)
- [React Components in Docusaurus](https://docusaurus.io/docs/using-plugins)
- [Docusaurus Configuration](https://docusaurus.io/docs/configuration)

---

**Note**: The chatbot widget is now integrated into all pages of your Docusaurus book automatically!
