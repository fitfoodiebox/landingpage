var modalTrigger=$(".cta"),modalEl=$(".modal"),modalPop=$("modal-popup");modalTrigger.on("click",function(){modalEl.addClass("-show")}),modalEl.on("click",function(o){var a=$(o.target);a.hasClass("-show")&&modalEl.removeClass("-show")});