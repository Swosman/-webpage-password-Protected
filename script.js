
(function() {

        var pl = "0V3J5Qq3lEQ+r1l25Rj3xjyjEDDhfaK3pkLdOtSIwxe9/nQozxtDeyGoSZzyPMyu6+EsKHsu9Xys/M6DhU6mS4v18quE4NWt9MAcDwSeHyi875ytHgTFcCaapz+Lbv+7+6U8azK0PnH92nx3gOWL1yYRqArFNcQrpeFZmq9twFadJePca/GQWz1weDnM7clIP1cvK7bptmB/bXOMDxgYAXC7PACSGS5j2aUzRHkTAoxiaVNzsRZ34rig4wReri1U9Ho9SdRs9MYxqQcSpgt0nwl1WkHga/4MgrLrY+27VmbhsEbj7X/AwdxiUjP2WBvMYosAZ2LwoW6M/R7QAgRWT8VIkmSL7raSwpzBIe4PgNziRlYj+5dZ/T8oJhS3gu4hhb/g6ao7qnUG8u6491lsjwt225vn7p9t3M9fGLM5bkURkOUMH+5FARgo3KyqrYN4Dv9WVzqMyOKG8PPpxz+0z2EfTHc6sNHkwdfq9dOtEWn9Vbug1F5aidMxwtNKtfbMy5ZoHDpO4x0LkRl6exw364JViTWXt4CwTmM1Tai12ULL8+9MpxhpYyXGHfqpFvltBiWVbT84JIJ3Q28cTLI4oVf18/gHQsjBp24Fmfzs0eEI1WuxF6gpMcYSM+KR99Jar3PJpk68IhT02BuVYpqPV2HGA7w+2o4AQPErxl1qLjHSBZ8+0WeK7uEd6HvUQeH5jCgN6fOnF6VTPq332WjGL/YEctbhQGzu/2giSdC68yK9d5afXd1PBsMgLfo2NDvOUMbOomqCF4xjsp1gftRkTuKTfri9Xs72J3pjZggOm9dcxe5PdCyWUR9Pjlb+Nr7y13wMgM8Kj/eAMFjnnpE0EfRlYqFJXrjHuSHhSeMRoqshbvY8ZgVc/y9Ej3tiX2OzM46v+4EF1PpqhHGdLsQ40K2t/LoeZql4t7PeNJHxM+x1jr7+GVSBe0Vkd0Z89+q66xiA6EVROx2UBbFHqf4aEpS2RYulNG7EWrKmwh7ux/YMqwlvMlTFjkzCj/igRISHWMEvuQJtic2koacVSatOip73eTeVdfsfO73TPL3gfNdHGNpxU3YaLXExAFwEwRhaTQMCcOYXg+qrCtAxGIlLNQ8D4VpQeNeuKIGwGXLfa2YOqvsqNYdDc8SrPTv+UUAUio3rklBgi9C4GcxB74KciAIVwYZ6PpvD8sWlYglJj2Bkp5yvTXsMFvjpBJRZvIraslItU5Wmsz4pTIdvWHodQ4+tYYTnuyWVuZ8DuM/JWmf6eO6BVo5kmbWTjFiMky03ekheGdY9iL3EcUnzb+/KhvyhB7oIcnNN+MHVjaScbDm6d/7/SliqUT4M991E69mJJEx3NsiWMFpsBIjsE+3eoQTcD5T+nf1MxeVwhOwj6oB3XcFWUDr+QzUn2Kvpx9MICw1IxqU8J6NDPZKNtWp8x69uWPcPCVKieQ7ElshLiM8c20ai83xPdV+ECf7w5K+3XnmD1TeJDez5pM2mc03+PO8U0kxlj52o/uwWck1DGks8dlvMnzt2CXQoKoQaT0W1lwauB7aXP4ytWv5dLsigfnjgzcrH0qaDo4DUs0Zqz9st90T7hbu4aiAEtSiiKhw6ixhTGgT+T9tn+GiepyZcUEWLE8TxNTcvVlgqcH/w0WWhhtdj9TCyP/i7an4U0IAwjMLurnO2FVrZv09qBvtFNKvA4DPtXKWCZH+hmYRcm9ZlI/DLqpMSZ942ZiWNkOK86Nq1ryYdVHSMu4hl6hBpg5Ch0B8BZuplzhqZDG9yYh8Q7t6F0Yjjw7JKmJbseLs1+btQppIB4jsl3AwJwol0cQg2EUG/dmu+eE8UxLQopiVIqZjhuCn8/4QmyPJFng6MzFdfhC9BtpNvAmZaTbw0+CjqoIsCa0ONB08TRK88XSTf4EvuUTKuYOzAANUP/IGRKddhlQbY/hCkZb1xssD8fuxBSa70lBLF1NAJO7oPz3gKMMI7E4hDHtr1s+OvM8epvQUNKge8Gd5IraQ69oolio32ugpCMZW/nPkaxCffYoq1Rk91yBHTNsFcphd2mOBRodRLFvtKEgLxbNorPMT2/A4XgqcHPZGdmGOoriAyctwt/xRHRzPdWvsElF/pQezFoLsWOYUdm5lQJhbe8aDlrwsoqgjp3f1rMrwDuTCPlQLxP3NxDf13wQVG8HsEuGYeXluAKAdny5aXuGYCnoiHQrOC/uSPCtvGyyxCHjshGalVd5z0vM/TqTiGOTSCzOjC66FMOzyc03bL7NVgETT8KJTr5EpdTPGPaGfnGCNNuls6g/gcC/NULwn7fvpqoT0bXpd4jSfIDaw5Abl7/wtKJV781s7Nk6XFvgsNUEyipKI06fu4LhwuUDf6s2M4MEzNv5iiJFDJw7AQBeyxTUT7LN9wjhJxSKvHhTth+O3cvHxiF4K5DVjN31466Yy/QN8OcGXMGPWUApWnl/GTnYR6gTd3WSfXCei6ltT2tesLjm9fzq38k1RgbgVGv2I2YibeGpms75ZVi0lHsZHWl4D47RlNzZ1iPLKeZsrkBXmskGJrVVG7owDIqLYVeiAaMURReEbX3VwpwNKbI8AcFn3AIfvJ433Tm0Wo7O5jOBoHdXqiVvcVg3oAaXwJZaKBzoEV1f25/JXS/jpSBug0P+/fFqYP1mTWEFTUzyrDd3CoKnpPSSjKNxMNG/V2o6iogrk1A6qDJce9gD357GWu0t+JF95+SHirYKYjrujC6ZsJmYQXHELm/o+vQ1FflystPjuXYaV0ffESMtmytlc6CU0vl2xVQCSar4oQPFjyK4zddXELfTmq6gvqm5pxkhJQIZ4OcPwJxUIdBuIJxn0Q7L0q5d+lCiD/o/dn3PXmeJCwaPSDnBQM1Ak8nCXkeOZJLN+xS9GLyx+JR9IqMlyoFrs0rwSyMjJ5+gTcA2HZaYGLyx10BFp82mjRX+oYepcn9q/oB5Qse47mPW0DCMuVpjA32rNF7OHmcxI9HSr7WNQQoi/w5002LiytflVQziHMbD7qRw7lMKOPc1/lAimYCLsqs76J7oIQ4ZvRlosaoIoSWgFYN4sbvLHdWfg9B5yonUbUa0H7dme5RRNabF3XWdckA6jLhBbWsxHCbttgdPt9dOQ/vGwwfkpFZacW9oRof/j5Eg931LK6kY5BfLTUSDqHujmXXPGkH6FsSuzuAQ1iFeyJuQ0IooaFMvWsCsb1jMw2RqgAXjOmA1tZ77BKH8UuyisdCNyUggDKyfx+mOGkJju6HQF1FE6n7sp3V5Z+KwRkEaoFsSginpxOxEirEWMx/FO2t+xkk+cNuLwYTB4pzYU/UDaq9rN4AOP/PMfjLkkoE8hom27uFsm+qZhIP4EkxgLXU5MMObnPSgAJ1dkeh4nkAhpm+nLgzjpx/BlW/cGM1TTOnpI9vt08M91FzcuooycgxdUvP8RgY+qwEiZv8snF0Ut/dod/RIky/GJj33YtHQS/zMNl+wDCQw3RDVYM1FJ8BHeoyoJ+Pjw/CxFoIvbVstJD6bcg9b9ocK6EddaNPRiR+jg0i8q/ocWkStmVKybVPapFvVv4jdJ1mF2omSuY4V/g3a6i5z/nj6IRTo70pEU532Biumtqx8+nYT7gcKVzmdnHeXF5RDy563wqBicaYmWqhNVA67X+H5wUdwvsVL2G7H6p/z7Kte167BGyOp2+dQ2fN3YtjlZ+7Gz+g+HdKJDqDIcGnMuxxaxi7zFV6rhibtS2Lf4qxAYc9bpW+5xuf0TtA1AWDRr3CZAPJDKm8bxn+e+NY90Xpsz5kx0ODd+KkxaHiaBEwiot8WdIwiqXV1NqzZO+E/TvjPZkxOCBugsUKTP7UlhjOLav0YAt6sHfrYxlZ5pSaYNu23FtvSEwcT/EHq0vWoH79NquRL36XuST3GZuyf5orDZqsRg2hTWbHi1oswHSYvk6yoIJxn9UhuTDOe84cthVw0uexQlCAhYGrPXhEKuJJOO5s9GohV537SnKUPSV4dRUHL3RpJZ4asAxkkHMep0r221Ds9/Bdauh/uA6O4JV8eHa5cjTzDlwlv6rEK5eOIm/kTVedxvA2PsmW3Hm3aUbs7C5DjxVsPMK8RapQlOo14eEiv8PYMbfbm+lJVcB1/yIpZd5Wu6btTN8OXeDwYnW/TUAun45lwariA+gbHk/d7iGKAmIPwQY5lQu3ae9X2Kx7AJTzO4oV0MDsp406QopCNSnTTxib1zs0QbJyhpUBZY4N+5RZqETyQjjezDDDjy/uSe+XQcENlDgsgZiNCKB4bV8Z+fuOW3jIVpbd+Cv945S9cYQXLB1NaNBX9h9I4I56uwLLHp6CMLm+rX4i4St0H0knYeIuEHNKLJZmNbSffRHFTl4Hl4Y+4QfPL0C1qP75UQ3urr5QCSduLEgd7ZRiG+N7fMYfI1xhDW9CAXZRu5SNkEqPUUQtI5yzjcZvEo5yta4EeohFXl3MkiIAmu4zLv77/jEGauXsv7F1ZSqQtam4pkx5ZknUcl29CImntBqgjVdG5O/qmBjonYyqF1VEfJypdwY2oAFp+V24GCN33e0MJHx8oJyxomUxCXZZSLyCEen9b4npbAJ5svCELtx5O/1efxLOuAFWn4lpIdsanopYnCSMMCiSnwimybnA5Mjo0nn36hRxz7nAxtW69KCClaWcS83GbF72S1EBuhZiliamNUZ+IjDQOEpPIjCeQAZDAMfmtNpJ4L95WLC16HLFjny3g7RCYu9M/xxzPMOJ68HQdvZvix1SIv/3q80EaJRc68hwbQKahSh4itbyhHUoK3+A9FxI0A0jKsFcIVdKiGA1WyeTqawkrDvWZI/HeS5voWR7aZ3LDV69KGlEI/7PqseMgCtCOeKOAc09O233IChHZPk+V8D5zbd7f47jNKXl8Rnr1zzzck+v74OaUgaITd9tlyuaG0sAQcb9YMjCsKDu/yOoiXkAFY1VeUL8YZn5NMW+Ccf8XJm5yjwIdqo1fqGgTRQppo17gnb4NBifuGn2OP7vd3Co7HW8mEoAmo034/HdXQmWdCFRnoaTEnkUQiGAwFITdK3tsIW/re6zDGv3iNqGScVg8awlYxEmlvrAjkglDveTnsLayVnIDDThwFciUSMGE9yTlf4mXszTp2cYNLzTfI2AFxe/n0ADr2HBSVAIMgGt6BN7eAOEuf85M7squTQ6ArGKPktvASRpm59ee8X+0RpMJc6zmJaegAwjaqnUTpa1j+Etn0ZIuaQ2JC3y7j0ZwAMa2Yr6JnKdmlj5J1NaXEl2Ry2vXXQFMRbdRNlFfwVdIG91a6WygX69vWblHN1x5tkp1iMhWDHUwzS9RPJLimDTUwtu1Hnpq9Bcom9Oo8hPf3BV57v11glZHtNnmgP3JfO4JU4dJJMJ7ri4bPoPa2+gugvoIP+7yKMQH3LP3cm96X653mx12BM3/dOGr48ETgSFRhtLsFFA1PoIpaNJzciL1Sf6VEmfDHiCY6720ioQ49lXxT2JCiyH9BbK3m6poFEAXxjEWBZQ0jMhuUYpFuAvP0ppfKP0HpDekvc2PfqgyMKYyUWSvkJC37RDrTZHlg6wU0WH7bK46KggEHldvTDWMc4ZTlCj7RM+k6K4+ETqfICl3ri3/9ubpEWEE55WUhtnlK0pE7N6o+dyFkKjkD/42fAvPT2u5ibcR1TZKvFkXrSVk/O07qu+D0cMyfboorLkmRitqH3j/+6J38936Uzvx4Ni3BuEuAS0Ub7cANOPUb0K9PuV7fa0mcu5Q9ttzo/8CIXqkBqg5zO3Je8jos1NpekV8O+JDEly6Ck419HVa6V0pRtIluPx+laNXwg4SIIOZAZA82wcfJNOlhAJcMdz+95rxHS8hdSzLe8NTAOU8+mWMxtkjNovwlZ3zA+zFH5f6WW9vlD3rl2iitkAEUO7nsAtkE9XBhFYp0X8HYvtRODlPhEnopeYjJ3FLEpWFFOZYXlOyEGQ5edaQK563FuZBE8YWFqQFysvdBC7R6fDtql5pxZceXU5E/afkjzk5POXngDP7D5lrQBAV8cGY3KccLTB8R/K3NjZtA5kVsNoz0EZ3DkaXqnmgmn0yOZ5/fNcmtolJY3wCUnjRX/lpxrpNS///nCxKiaSexd2TBm3jm9h8MXlIjW10ypXOsFL4J65bn2R72oQ3ruRC9h66WQjY1LSglCf4jcuFlb3ndcHys8Wuov0652GB7v0cu0LQ4h5aE8Cdn9uZh2DGLSvrFCWsoX+VPds3VywHJ/7P9Kbu4B25SILg8+DcYLFZxG1flvng==";
        
        var submitPass = document.getElementById('submitPass');
        var passEl = document.getElementById('pass');
        var invalidPassEl = document.getElementById('invalidPass');
        var trycatcherror = document.getElementById('trycatcherror');
        var successEl = document.getElementById('success');
        var contentFrame = document.getElementById('contentFrame');
        
        // Sanity checks

        if (pl === "") {
            submitPass.disabled = true;
            passEl.disabled = true;
            alert("This page is meant to be used with the encryption tool. It doesn't work standalone.");
            return;
        }

        if (!isSecureContext) {
            document.querySelector("#passArea").style.display = "none";
            document.querySelector("#securecontext").style.display = "block";
            return;
        }

        if (!crypto.subtle) {
            document.querySelector("#passArea").style.display = "none";
            document.querySelector("#nocrypto").style.display = "block";
            return;
        }
        
        function str2ab(str) {
            var ustr = atob(str);
            var buf = new ArrayBuffer(ustr.length);
            var bufView = new Uint8Array(buf);
            for (var i=0, strLen=ustr.length; i < strLen; i++) {
                bufView[i] = ustr.charCodeAt(i);
            }
            return bufView;
        }

        async function deriveKey(salt, password) {
            const encoder = new TextEncoder()
            const baseKey = await crypto.subtle.importKey(
                'raw',
                encoder.encode(password),
                'PBKDF2',
                false,
                ['deriveKey'],
            )
            return await crypto.subtle.deriveKey(
                { name: 'PBKDF2', salt, iterations: 100000, hash: 'SHA-256' },
                baseKey,
                { name: 'AES-GCM', length: 256 },
                true,
                ['decrypt'],
            )
        }
        
        async function doSubmit(evt) {
            submitPass.disabled = true;
            passEl.disabled = true;

            let iv, ciphertext, key;
            
            try {
                var unencodedPl = str2ab(pl);

                const salt = unencodedPl.slice(0, 32)
                iv = unencodedPl.slice(32, 32 + 16)
                ciphertext = unencodedPl.slice(32 + 16)

                key = await deriveKey(salt, passEl.value);
            } catch (e) {
                trycatcherror.style.display = "inline";
                console.error(e);
                return;
            }

            try {
                const decryptedArray = new Uint8Array(
                    await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, ciphertext)
                );

                let decrypted = new TextDecoder().decode(decryptedArray);

                if (decrypted === "") throw "No data returned";

                const basestr = '<base href="." target="_top">';
                const anchorfixstr = `
                    <script>
                        Array.from(document.links).forEach((anchor) => {
                            const href = anchor.getAttribute("href");
                            if (href.startsWith("#")) {
                                anchor.addEventListener("click", function(e) {
                                    e.preventDefault();
                                    const targetId = this.getAttribute("href").substring(1);
                                    const targetEl = document.getElementById(targetId);
                                    targetEl.scrollIntoView();
                                });
                            }
                        });
                    <\/script>
                `;
                
                // Set default iframe link targets to _top so all links break out of the iframe
                if (decrypted.includes("<head>")) decrypted = decrypted.replace("<head>", "<head>" + basestr);
                else if (decrypted.includes("<!DOCTYPE html>")) decrypted = decrypted.replace("<!DOCTYPE html>", "<!DOCTYPE html>" + basestr);
                else decrypted = basestr + decrypted;

                // Fix fragment links
                if (decrypted.includes("</body>")) decrypted = decrypted.replace("</body>", anchorfixstr + '</body>');
                else if (decrypted.includes("</html>")) decrypted = decrypted.replace("</html>", anchorfixstr + '</html>');
                else decrypted = decrypted + anchorfixstr;
                
                contentFrame.srcdoc = decrypted;
                
                successEl.style.display = "inline";
                setTimeout(function() {
                    dialogWrap.style.display = "none";
                }, 1000);
            } catch (e) {
                invalidPassEl.style.display = "inline";
                passEl.value = "";
                submitPass.disabled = false;
                passEl.disabled = false;
                console.error(e);
                return;
            }
        }
        
        submitPass.onclick = doSubmit;
        passEl.onkeypress = function(e){
            if (!e) e = window.event;
            var keyCode = e.keyCode || e.which;
            invalidPassEl.style.display = "none";
            if (keyCode == '13'){
              // Enter pressed
              doSubmit();
              return false;
            }
        }
    })();