# Ascent pilot kit

Everything you need to invite your first experts and learners. Edit the drafts in your own voice before sending; replace anything in [square brackets].

## Before you invite anyone

- [ ] Email service connected in Supabase (Resend or Brevo), and the email rate limit raised. Without it, sign-in emails stop after about 2 an hour.
- [ ] Sign-in email given the Ascent look (text below).
- [ ] Your name and affiliation added on your Ascent account page.
- [ ] Each path set to the right status in Admin › Paths (Dostoevsky, Classical music and Geopolitics start as "Draft").

## Invitation to an expert reviewer

> **Subject:** Would you review a learning path on [subject] for Ascent?
>
> Dear [name],
>
> I'm building Ascent, a free site that guides self-learners through a subject step by step, from works anyone can enjoy to the level of a university seminar. Every path is checked by experts before it's marked as endorsed, and I'd be honoured if you would review the [subject] path.
>
> It's a ready draft, not a blank page: [number] works in six stages, each with a short introduction, a guide, and a quiz. You'd read through it and, for each work, endorse it, suggest a change, or flag a problem. Each stage takes about 10 minutes. A handful of facts are marked for an expert to confirm.
>
> If you endorse the path, your name and affiliation appear on it as a reviewer. Your email is never shown.
>
> To start, sign in at https://wasiulbahar.com/ascent/ with this email address (you'll get a sign-in link, no password needed), then reply to let me know. I'll give your account reviewer access and assign you the path.
>
> With thanks,
> [Your name]

## Invitation to a pilot learner

> **Subject:** Try Ascent and tell me what you think?
>
> Hi [name],
>
> I've built Ascent, a free site that takes you through a subject one small step at a time, like Duolingo for books, music and big ideas. There are three paths so far: Dostoevsky, Classical music and Geopolitics.
>
> Could you try it for the next two or three weeks? Pick one path and do the first stage at your own pace. Each work is a short lesson: a story, the work itself, a guide, and a quick quiz.
>
> Open https://wasiulbahar.com/ascent/ and sign in with your email so your progress is saved. On a phone you can add it to your home screen, and it works like an app.
>
> Then tell me what felt good and what was confusing: there's a "Send feedback" link at the bottom of the home page, or just reply to this email.
>
> Thank you!
> [Your name]

## Giving an expert reviewer access

1. Ask them to sign in once at https://wasiulbahar.com/ascent/ so their account exists.
2. Admin › People: find them and change their role to **reviewer**.
3. Admin › Paths: under their path, choose them in **Assign a reviewer**.
4. They'll see a **Review** tab the next time they open Ascent.

## What to watch during the pilot

- **Admin › Insights:** how far people get in each stage, and which quizzes are failed most.
- **Admin › Reports:** problems and feedback. Feedback appears as "App feedback".
- **Admin › Paths:** endorsements and reviewers' suggestions.

## Sign-in email text for Supabase

In Supabase: Authentication › Emails › Templates › **Magic link** (and the same for **Confirm signup**). Paste the subject and the message below. Keep `{{ .ConfirmationURL }}` exactly as it is: that's where Supabase puts the sign-in link.

**Subject:** Your Ascent sign-in link

**Message (HTML):**

```html
<div style="font-family:Arial,Helvetica,sans-serif;max-width:480px;margin:0 auto;padding:24px;color:#23222F">
  <p style="font-size:20px;font-weight:bold;color:#3B2F86;margin:0 0 16px">Ascent</p>
  <p style="font-size:16px;line-height:1.5">Here's your link to sign in to Ascent. It works once, on the device where you asked for it.</p>
  <p style="margin:24px 0"><a href="{{ .ConfirmationURL }}" style="background:#23222F;color:#ffffff;text-decoration:none;font-weight:bold;padding:14px 22px;border-radius:14px;display:inline-block">Sign in to Ascent</a></p>
  <p style="font-size:13px;color:#6B6A7B;line-height:1.5">If you didn't ask for this, you can ignore this email: nobody can sign in without the link.</p>
</div>
```
