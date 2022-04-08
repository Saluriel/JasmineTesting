describe("Helpers tests", function () {
    beforeEach(function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 10;
        submitPaymentInfo();
    })

    it('should calculate the tip percentage', function () {
        calculateTipPercent();

        expect(sumPaymentTotal('tipPercent')).toEqual(10);
    })

    it('should add the tip amount of all the payments', function(){
        expect(sumPaymentTotal('tipAmt')).toEqual(10);

        billAmtInput.value = 100;
        tipAmtInput.value = 10;
        submitPaymentInfo();

        expect(sumPaymentTotal('tipAmt')).toEqual(20);
    })

    it('should calculate the tip percentage', function(){
        expect(sumPaymentTotal('tipPercent')).toEqual(10);
    })

    it('should append a a table row with the value inside', function(){
        let newRow = document.createElement('tr');

        appendTd(newRow, 'value');

        expect(newRow.children.length).toEqual(1);
        expect(newRow.firstChild.innerHTML).toEqual('value');
    })

    it('should create an X that shows up to the right of the server and payment info', function(){
        let newRow = document.createElement('tr');

        appendDeleteButton(newRow);

        expect(newRow.children.length).toEqual(1);
        expect(newRow.firstChild.innerText).toEqual('X');
    })


    afterEach(function () {
        tipAmtInput.value = '';
        billAmtInput.value = '';
        paymentTbody.innerHTML = '';
        serverTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        paymentId = 0;
        allPayments = {};
    });
})