# Huddle OS — Notion Sync Update

Дата: 2026-07-18  
Статус: готово для переноса в Notion  
Назначение: зафиксировать, какие изменения нужно добавить в Huddle OS Project Memory Execution Center после последнего стратегического спринта.

## Важно

Прямая синхронизация в Notion из текущего Codex-чата пока не выполнена: в этом окружении не доступен инструмент записи/обновления Notion-страниц.

Этот файл подготовлен как Notion-ready update: его можно вставить в корневую страницу Huddle OS или импортировать как отдельную страницу и затем разнести ссылки по нужным разделам.

Рекомендуемое место в Notion:

- Root: `Huddle OS Project Memory Execution Center`
- Section/Page: `2026-07-18 — Strategy Execution / Finance / Grant Wave 1`
- Связанные страницы:
  - `Current Final Materials`
  - `Professional Rewrite`
  - `Data Room`
  - `Funding / Grants`
  - `Project Bible`
  - `Document Map`

## Короткое резюме

Мы перешли от хаотичного набора материалов к контролируемому пакету реализации проекта Huddle.

Главное изменение: теперь у проекта есть рабочий слой управления документами, claims/evidence, финансами, грантовыми маршрутами и правилами выпуска внешних материалов.

Текущий локальный пакет:

`C:\Users\rielt\OneDrive\Документы\Huddle\project_memory\strategy_execution_2026_07_18`

## Текущий источник истины

1. Финальный брендбук Huddle:
   `C:\Users\rielt\OneDrive\Документы\Huddle\deliverables\Huddle_Brand_Guidelines_Final_Package_2026-07-17.zip`

2. Финальная версия бренда:
   - используем только утверждённый логотип Huddle Family;
   - используем только утверждённую палитру из обновлённого брендбука;
   - старые логотипы, цвета и визуальные эксперименты считаются устаревшими.

3. Текущий статус компании:
   - планируемый applicant/operator: `ALANAR AS`;
   - компания пока не должна описываться как уже зарегистрированная, пока нет подтверждающего документа;
   - все grant/investor документы должны использовать формулировки `planned`, `intended`, `to be confirmed`, если речь о юридическом статусе.

4. Стадия проекта:
   - pre-validation / pre-incorporation / controlled preparation;
   - внешние документы пока не отправлять без founder approval, finance review, claims/source review и legal/privacy review.

## Что добавлено или обновлено

### 1. Strategy Execution Pack

Создан рабочий пакет:

`project_memory/strategy_execution_2026_07_18`

Назначение: единый центр управления ближайшим этапом реализации Huddle.

### 2. Sprint 0 Control Plan

Файл:

`00_Sprint_0_Control_Plan.md`

Содержит:

- порядок работ;
- зависимости;
- критерии готовности;
- текущие ограничения;
- следующий практический шаг.

### 3. Huddle Master Project Bible

Файлы:

- `01_Huddle_Master_Project_Bible_Structure_v1.md`
- `05_Huddle_Master_Project_Bible_v0_1_Sections_1_5.md`
- `06_Huddle_Master_Project_Bible_v0_1_Sections_6_13.md`
- `07_Huddle_Master_Project_Bible_v0_1_Sections_14_20.md`
- `08_Huddle_Master_Project_Bible_v0_1_Sections_21_25.md`
- `09_Huddle_Master_Project_Bible_v0_2_Merged_Working_Draft.md`
- `16_Huddle_Master_Project_Bible_v0_3_Founder_Voice_Pass.md`

Статус: internal working baseline.

Следующий шаг: founder review + deeper claims pass.

### 4. Claims & Source Register v2.1

Файл:

`02_Claims_Source_Register_v2_1_Working.md`

Добавлены новые claims по funding/grants:

- `C-028` — Innovation Norway Oppstartstilskudd 1
- `C-029` — Innovation Norway Oppstartstilskudd 2
- `C-030` — Research Council IPN Industry & Services 2026
- `C-031` — SkatteFUNN

Правило: все внешние утверждения должны иметь claim ID или быть удалены/смягчены.

### 5. Document Map v1

Файл:

`03_Document_Map_v1.md`

Добавлены новые документы:

- `D-030` — Grant Eligibility Memo / Oppstartstilskudd 1
- `D-031` — Grant Eligibility Memo / Oppstartstilskudd 2
- `D-032` — Grant Eligibility Memo / RCN IPN 2026
- `D-033` — Grant Eligibility Memo / SkatteFUNN
- `D-034` — Innovation Norway Oppstartstilskudd 1 Application Skeleton
- `D-035` — Notion Sync Update

### 6. Team & AI Agent Operating Model

Файл:

`04_Team_AI_Agent_Operating_Model_v1.md`

Зафиксирована модель команды:

- Core 13 roles;
- outsourced critical expertise: Product Manager, Tech Lead, Privacy/Child Safety/Legal Advisor;
- обязательный QA/approval gate для каждого важного документа.

Важно: Core 13 — это planned operating structure, не утверждение о том, что команда уже нанята.

### 7. External package roadmap

Файл:

`20_External_Packages_Roadmap_v0_1.md`

Определены пакеты:

- investor;
- grant/public value;
- municipality;
- B2B/partner stores;
- crowdfunding/public;
- website/waitlist;
- MVP/demo.

### 8. Investor, grant and pilot drafts

Файлы:

- `21_Investor_One_Page_Summary_v2_1.md`
- `22_Grant_Public_Value_Narrative_v2_1.md`
- `24_Oslo_City_Cell_Pilot_Proposal_v2_1.md`

Статус: controlled external-prep drafts.

Не отправлять наружу без:

- founder approval;
- source/claims review;
- finance reconciliation;
- privacy/child-safety review;
- legal/applicant confirmation.

### 9. Data Room Index

Файл:

`25_Data_Room_Index_v2_1.md`

Добавлены:

- owners;
- access levels;
- statuses;
- release gates;
- связь с finance workbook и grant memos.

### 10. Finance control layer

Файлы:

- `27_Use_of_Funds_and_Finance_Assumptions_v0_1.md`
- `30_Huddle_Finance_Model_vNext_v0_1.xlsx`
- `31_Finance_Model_vNext_QA_Notes_v0_1.md`

Статус: internal working baseline.

В workbook есть листы:

- `README`
- `Inputs`
- `Investor_Use_of_Funds`
- `Oslo_Pilot_Budget`
- `Grant_Budget_Template`
- `Runway_Scenario`
- `Revenue_Assumptions`
- `QA_Checks`

Важно: суммы и assumptions пока не финальные. Они нужны как контролируемая структура, не как утверждённая финансовая модель.

### 11. Privacy & Child Safety Baseline

Файл:

`29_Privacy_Child_Safety_Baseline_v0_1.md`

Статус: internal baseline.

Назначение:

- ограничить рискованные формулировки;
- задать минимальные правила по детям, данным, privacy, marketplace и pilot;
- подготовить основу для legal/privacy advisor review.

### 12. Grant Eligibility Wave 1

Файлы:

- `28_Grant_Eligibility_Memo_Template_v0_1.md`
- `32_Grant_Eligibility_Memo_NO_002_Innovation_Norway_Oppstartstilskudd_1_v0_1.md`
- `33_Grant_Eligibility_Memo_NO_003_Innovation_Norway_Oppstartstilskudd_2_v0_1.md`
- `34_Grant_Eligibility_Memo_NO_007_RCN_IPN_Industry_Services_2026_v0_1.md`
- `35_Grant_Eligibility_Memo_NO_008_SkatteFUNN_v0_1.md`
- `36_Grant_Eligibility_Wave1_QA_Notes_v0_1.md`

Результат:

1. Первый практический маршрут: Innovation Norway Oppstartstilskudd 1.
2. Второй маршрут после validation/MVP evidence: Oppstartstilskudd 2.
3. RCN IPN — только если будет реальный R&D/innovation project с партнёром или R&D provider.
4. SkatteFUNN — после company setup, taxable status and R&D accounting.

### 13. Oppstartstilskudd 1 Application Skeleton

Файл:

`37_Innovation_Norway_Oppstartstilskudd_1_Application_Skeleton_v0_1.md`

Статус: internal skeleton, not application-ready.

Перед превращением в реальную заявку нужно заполнить:

- applicant legal facts;
- Brønnøysund/registration status;
- founder answers;
- grant budget;
- pilot geography;
- validation plan;
- proof of own time/costs/cash need;
- privacy/safety boundary.

## Официальные источники, проверенные для Wave 1

1. Innovation Norway — Oppstartstilskudd 1  
   https://www.innovasjonnorge.no/tjeneste/oppstartstilskudd-1

2. Innovation Norway — Oppstartstilskudd 2  
   https://www.innovasjonnorge.no/tjeneste/oppstartstilskudd-2

3. Research Council of Norway — Innovation Project for the Industrial Sector, Industry and Services 2026  
   https://www.forskningsradet.no/en/call-for-proposals/2026/innovation-project-for-the-industrial-sector-industry-and-services-2026/

4. Research Council of Norway — SkatteFUNN  
   https://www.forskningsradet.no/skattefunn/

## Что ещё не готово

Не готово для отправки наружу:

- investor one-pager;
- grant narrative;
- Oslo pilot proposal;
- Oppstartstilskudd 1 skeleton;
- finance model;
- data room;
- public website text;
- municipality package;
- B2B partner package.

Причина: нет финального founder approval, реальных applicant/legal facts, финального бюджета и полного source/legal/privacy pass.

## Что нужно сделать следующим

### Priority 1 — Applicant facts

Заполнить:

- точное юридическое имя applicant;
- регистрационный номер, если уже есть;
- адрес;
- founder/owner details;
- bank/accounting readiness;
- текущий статус ALANAR AS.

### Priority 2 — Grant budget

Заполнить grant budget для Oppstartstilskudd 1:

- что именно финансируется;
- какие расходы eligible;
- сколько просим;
- какие расходы покрываются founder/team;
- какие результаты будут после периода финансирования.

### Priority 3 — Founder answers

Ответить на founder voice и application questions:

- почему Huddle должен существовать;
- почему сейчас;
- почему команда способна это сделать;
- почему Oslo/Norway first;
- что будет доказано за 90 дней.

### Priority 4 — Privacy/legal review

Назначить внешнего advisor:

- privacy;
- child safety;
- marketplace liability;
- municipal/public-sector language;
- data minimisation.

### Priority 5 — Convert skeleton into real application draft

На базе `37_Innovation_Norway_Oppstartstilskudd_1_Application_Skeleton_v0_1.md` собрать:

- application draft v0.2;
- budget appendix;
- validation plan appendix;
- risk/control appendix.

## Правило на будущее

Все изменения в Notion должны проходить по такому порядку:

1. Сначала обновляется локальный source-of-truth файл.
2. Затем создаётся Notion Sync Update.
3. Затем изменения переносятся в Notion.
4. Затем в локальном README фиксируется, что Notion обновлён.

Пока прямой Notion write-access не подключён, статус синхронизации: `prepared for Notion, not pushed`.
