// Vytvořte si repozitář ze šablony cviceni-cenik se stránkou, která nabízí předplatné za nějaké služby. Může jít například o internetovou televizi, pravidelné dovážky jídla nebo třeba webový hosting.

// Přidejte to stránky soubor s JavaScriptem, tentokrát bez atributu type=module, abyste mohli své funkce volat z konzole.
// Napište funkci selectPlan s jedním parametrem planNumber. Tento parametr bude představovat číslo plánu. Funkce podle čísla plánu vybere ze stránky správný DOM element a přidá k němu CSS třídu plan--selected. Vyzkoušejte vaši funkci v konzoli s různými čísly.
// Opakovaným voláním funkce selectPlan lze na stránce postupně vybrat všechny plány. My bychom však chtěli, aby mohl být vybrát vždy nejvýš jeden. Upravte funkci selectPlan tak, že vybere plán zadaný v parametru a u ostatních plánů výběr zruší. Ke zrušení výběru stačí z příslušného prvku odebrat třídu plan--selected.

const selectPlan = (planNumber) => {
  const plans = document.querySelectorAll('.plan');
  for (let i = 0; i < plans.length; i++) {
    plans[i].classList.remove('plan--selected')
  };

  const plan = document.querySelector(`#plan${planNumber}`);
  if (plan) {
    const selectedPlan = document.querySelector('.plan--selected');
    if (selectedPlan) {
      selectedPlan.classList.remove('plan--selected');
    }
    plan.classList.add('plan--selected');
  }
  return plan;
}

console.log(selectPlan(2));