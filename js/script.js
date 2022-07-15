let getMilk = () => { return true; }
let getSugar = () => { return true; }

// coffee filter, coffee powder, hot water, WAIT for 4 hours
let getDecoction = () => {
    let decoction = 0;
    const deliverDecoction = () => {
        clearTimeout(prepareDecoction);
        console.log('Step1: Decoction is ready!!');
        return decoction;
    }
    const prepareDecoction = setInterval(() => {
        decoction++;
        console.log(`Decoction = ${decoction}`);
        decoction > 3 ? deliverDecoction() : '';
    }, 1000);
}

/** regular **/
let prepareFilterCoffee = () => {
    const milk = getMilk();
    const sugar = getSugar();
    const decoction = getDecoction();
    if (decoction && milk && sugar) {
        console.log(`     
         _________________¶¶¶1___¶¶¶____¶¶¶1_______________
        __________________¶¶¶____¶¶¶____1¶¶1______________
        ___________________¶¶¶____¶¶¶____¶¶¶______________
        ___________________¶¶¶____¶¶¶____¶¶¶______________
        __________________¶¶¶____1¶¶1___1¶¶1______________
        ________________1¶¶¶____¶¶¶____¶¶¶1_______________
        ______________1¶¶¶____¶¶¶1___¶¶¶1_________________
        _____________¶¶¶1___1¶¶1___1¶¶1___________________
        ____________1¶¶1___1¶¶1___1¶¶1____________________
        ____________1¶¶1___1¶¶1___1¶¶¶____________________
        _____________¶¶¶____¶¶¶1___¶¶¶1___________________
        ______________¶¶¶¶___1¶¶¶___1¶¶¶__________________
        _______________1¶¶¶1___¶¶¶1___¶¶¶¶________________
        _________________1¶¶1____¶¶¶____¶¶¶_______________
        ___________________¶¶1____¶¶1____¶¶1______________
        ___________________¶¶¶____¶¶¶____¶¶¶______________
        __________________1¶¶1___1¶¶1____¶¶1______________
        _________________¶¶¶____¶¶¶1___1¶¶1_______________
        ________________11_____111_____11_________________
        __________¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶________
        1¶¶¶¶¶¶¶¶¶¶¶__¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶________
        1¶¶¶¶¶¶¶¶¶¶¶__1¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶________
        1¶¶_______¶¶__1¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶________
        1¶¶_______¶¶__1¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶________
        1¶¶_______¶¶__¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶________
        1¶¶_______¶¶__1¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶________
        _¶¶¶¶¶¶¶¶¶¶¶__¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶________
        _¶¶¶¶¶¶¶¶¶¶¶__¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶________
        __________¶¶___1¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶1________
        __________1¶¶___¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶_________
        ____________¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶11__________
        11_____________________________________________111
        1¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶1
        __¶¶111111111¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶111111111¶__`);
    } else {
        console.log(`   
         ████████████████████                        
        ██                ██████                    
        ██                ██  ▓▓                    
        ██                ██  ██                    
        ██                ██████                    
          ██            ██                          
      ████████████████████████                      
      ██                    ▓▓                      
        ████████████████████  `);
    }
}

prepareFilterCoffee();