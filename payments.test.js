describe('Payments test functions', function () {
    beforeEach(function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 10;
    });

    it('should return the bill and tip amount and the tip percent', function () {
        expect(billAmt.value).toEqual('100');
        expect(tipAmt.value).toEqual('10');

    })

    it('should add a new payment when submitPaymentInfo() is run', function(){
        submitPaymentInfo();

        expect(allPayments['payment1'].billAmt).toEqual('100');
        expect(allPayments['payment1'].tipAmt).toEqual('10');
        expect(allPayments['payment1'].tipPercent).toEqual(10);
    })

    it('shouldnt add a new payment if theres no payment info', function(){
        billAmtInput.value = '';
        tipAmtInput.value = '';
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(0);
    })

    it('should create the current bill, tip, and tip percent', function(){
        let paymentTest = {
            billAmt : '100',
            tipAmt : '10',
            tipPercent : 10
        }

        expect(createCurPayment()).toEqual(paymentTest);
    })

    it('should update the #paymentTable when you use appendPaymentTable()', function(){
        let testPayment = createCurPayment();
        appendPaymentTable(testPayment);

        let curTbl = document.querySelectorAll('#paymentTable tbody tr td');

        expect(curTbl.length).toEqual(4);
    })

    afterEach(function(){
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        serverTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        paymentId = 0;
        allPayments = {};
    })
})