describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not update if the server doesnt submit a name', function () {
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  })

  it('should be case sensitive', function () {
    serverNameInput.value = 'grEgOrY';
    submitServerInfo();

    expect(allServers['server' + serverId].serverName).toEqual('grEgOrY');
  })

  it('should update the body of the serverTable with the new servers name', function () {
    submitServerInfo();
    updateServerTable();

    let currentTable = document.querySelectorAll('#serverTable tbody tr td');

    expect(currentTable.length).toEqual(3);
    expect(currentTable[0].innerHTML).toEqual('Alice');
    expect(currentTable[1].innerHTML).toEqual('$0.00');

  });


  afterEach(function () {
    serverTbody.innerHTML = '';
    serverID = 0;
    allServers = {};
  });
});
