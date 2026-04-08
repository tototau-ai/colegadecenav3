Project: ColegaDeCena V3

Purpose

A web application that reads film scripts and allows actors to rehearse scenes using AI voices.

Core workflow

1 Upload script
2 Parse script
3 Review parsed script
4 Choose character
5 Start rehearsal
6 Optional audio export

Important constraints

- No database
- No user accounts
- Scripts must never be stored
- Processing must be temporary

Supported formats

FDX (primary)
PDF
Copy and paste text

Script elements to detect

CHARACTER
DIALOGUE
ACTION
PARENTHETICAL

Parentheticals like

(V.O.)
(O.S.)
(whispering)

should be ignored by default.

Character names must be normalized to avoid duplicates like

CARLOS
Carlos
CaRLOS

Languages supported

Portuguese
English
