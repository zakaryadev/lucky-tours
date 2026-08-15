"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { Bot, Send, X, Sparkles, User, RefreshCw } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function AIChatWidget() {
  const { lang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        lang === "uz"
          ? "Assalomu alaykum! 👋 Men Lucky Tours AI Menejeri Mohiraman. Sizga qaysi yo'nalish yoki tur bo'yicha yordam berolay?"
          : "Hello! 👋 I'm Mohira, your Lucky Tours AI Manager. How can I help you with your travel plans today?",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts =
    lang === "uz"
      ? [
          "Turkiya tur narxi qancha?",
          "Dubayga paket bormi?",
          "Viza olishda yordam berasizmi?",
        ]
      : [
          "Turkey tour prices?",
          "Dubai packages available?",
          "Do you offer visa support?",
        ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (open) {
      scrollToBottom();
    }
  }, [messages, open]);

  const handleSend = async (userText?: string) => {
    const textToSend = userText || input;
    if (!textToSend.trim() || loading) return;

    const newMessages: Message[] = [
      ...messages,
      { role: "user", content: textToSend },
    ];
    setMessages(newMessages);
    if (!userText) setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await res.json();
      if (res.ok && data.result) {
        setMessages([
          ...newMessages,
          { role: "assistant", content: data.result },
        ]);
      } else {
        setMessages([
          ...newMessages,
          {
            role: "assistant",
            content:
              "Kechirasiz, javob olishda uzilish bo'ldi. Iltimos qaytadan urinib ko'ring yoki +998 95 676 00 66 ga qo'ng'iroq qiling.",
          },
        ]);
      }
    } catch {
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content:
            "Server bilan aloqa uzildi. Iltimos qaytadan urinib ko'ring.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSend();
  };

  return (
    <div className="ai-chat-root">
      {/* Floating Toggle Button */}
      {!open && (
        <button
          type="button"
          className="ai-chat-trigger"
          onClick={() => setOpen(true)}
          aria-label="AI Menejer bilan suhbat"
        >
          <div className="trigger-icon-wrap">
            <Bot size={24} />
            <span className="online-dot" />
          </div>
          <span className="trigger-label">
            <Sparkles size={13} /> AI Menejer
          </span>
        </button>
      )}

      {/* Chat Modal Window */}
      {open && (
        <div className="ai-chat-window">
          {/* Header */}
          <div className="ai-chat-header">
            <div className="ai-chat-header-info">
              <div className="ai-avatar">
                <Bot size={20} />
                <span className="online-dot" />
              </div>
              <div>
                <strong>AI Menejer (Mohira)</strong>
                <small>DeepSeek V3 • Online 24/7</small>
              </div>
            </div>
            <button
              type="button"
              className="ai-chat-close-btn"
              onClick={() => setOpen(false)}
              aria-label="Yopish"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Body */}
          <div className="ai-chat-body">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`ai-message-row ${msg.role === "user" ? "user" : "assistant"}`}
              >
                {msg.role === "assistant" && (
                  <div className="msg-avatar">
                    <Bot size={14} />
                  </div>
                )}
                <div className="ai-message-bubble">{msg.content}</div>
                {msg.role === "user" && (
                  <div className="msg-avatar user">
                    <User size={14} />
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="ai-message-row assistant">
                <div className="msg-avatar">
                  <Bot size={14} />
                </div>
                <div className="ai-message-bubble loading-bubble">
                  <RefreshCw size={14} className="spin-icon" />
                  <span>Mohira javob yozmoqda...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          {messages.length < 4 && !loading && (
            <div className="ai-quick-prompts">
              {quickPrompts.map((prompt, i) => (
                <button
                  key={i}
                  type="button"
                  className="quick-chip"
                  onClick={() => handleSend(prompt)}
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}

          {/* Input Form */}
          <form className="ai-chat-form" onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Savolingizni yozing..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={loading}
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              aria-label="Yuborish"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
