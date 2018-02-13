
            function dataInputan(){
            var unggahFoto = document.getElementById('UnggahFoto1').files[0].name;
            var nama = document.getElementById("Nama").value;
            var ttl = document.getElementById("ttl").value;
            var gender = document.getElementById("gender").value;
            var number = document.getElementById("number").value;
            var email = document.getElementById("email").value;
            var usia = document.getElementById("usia").value;
            var pendidikanTerakhir = document.getElementById("pendidikanTerakhir").value;
            var jurusan = document.getElementById("jurusan").value;
            var Keahlian = document.getElementById("Keahlian").value;
            
            
            document.getElementById("hasil").innerHTML =( `
            <fieldset>
              <legend> Foto </legend>
                <table>
                    <tr>
                    <td width="200px"> Foto <td>
                    <td> : <td>
                    <td coolspan="100px"> ${unggahFoto}
                    </tr>
                </table>
            </fieldset>
            <fieldset>
              <legend> Personal Data </legend>
                <table>
                    <tr>
                    <td width="200px"> Nama <td>
                    <td> : <td>
                    <td coolspan="100px"> ${nama}
                    </tr>
                </table>
              
                <table>
                    <tr>
                    <td width="200px"> TTL <td>
                    <td> : <td>
                    <td coolspan="100px"> ${ttl}
                    </tr>
                </table>
          
                <table>
                    <tr>
                    <td width="200px"> Gender <td>
                    <td> : <td>
                    <td coolspan="100px"> ${gender}
                    </tr>
                </table>
     
                <table>
                    <tr>
                    <td width="200px"> Number <td>
                    <td> : <td>
                    <td coolspan="100px"> ${number}
                    </tr>
                </table>
                <table>
                    <tr>
                    <td width="200px"> Email <td>
                    <td> : <td>
                    <td coolspan="100px"> ${email}
                    </tr>
                </table>
           
                <table>
                    <tr>
                    <td width="200px"> Usia <td>
                    <td> : <td>
                    <td coolspan="100px"> ${usia}
                    </tr>
                </table>
                </table>
            </fieldset> 

            <fieldset>
            <legend> Pendidikan Terakhir </legend>
                <table>
                    <tr>
                    <td width="200px"> Pendidikan Terakhir <td>
                    <td> : <td>
                    <td coolspan="100px"> ${pendidikanTerakhir}
                    </tr>

                    <tr>
                    <td width="200px"> Jurusan <td>
                    <td> : <td>
                    <td coolspan="100px"> ${jurusan}
                    </tr>

                    <tr>
                    <td width="200px"> Keahlian <td>
                    <td> : <td>
                    <td coolspan="100px"> ${Keahlian}
                    </tr>
                </table>
                </table>
            </fieldset>`)
             }