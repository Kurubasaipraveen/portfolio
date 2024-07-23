import React from "react";
import { Link } from "react-router-dom";

import "./Skills.css";

const Skills = () => {
  return (
    <div className="container-fluid my-5 py-5 text-center" id="skills">
      <h3 className="py-5 ">
        My <span>Skillss</span>* {/* &#9733 &#9733 */}
      </h3>
      <div className="container my-5 py-5 text-center" id="skillsContainer">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 my-3">
            <div className="row mx-3 align-items-center mb-5">
              <div className="col-6 col-lg-4 py-3 px-3">
                <Link to="#" className="text-decoration-none">
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTisiFrs65y6w_UY-rvGoHSoV_kfObDqH6XGg&s' alt="HTML" className="img-fluid w-50" />
                  <h6 className="text-white mt-3">
                    <span>★★★★</span>★
                  </h6>
                </Link>
              </div>
              <div className="col-6 col-lg-4 py-3 px-3">
                <Link to="#" className="text-decoration-none">
                  <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAA4VBMVEX///9Vmf9Rl/9LlP8ARqpXm/9Ynf9Hkv9cov/t8//6/P9CkP/v9v91qf/2+f8AQaY7jf8AOabg7P+BsP+Ltv+jxP8AQKjm7/+Xvf/c6P8AO6HT4v96rP/F2v/O3/+myP+40f8AJaBKi+xXb7otZ8cAL6Pd5POHlsoAGpw+fNwUTrGrzv+QoM6drNR6jsYqhv+7xOBqf8A1cdDO1+kkXb67zvN2nuSIq+tajN8wcthtjM4AAJmrsNYlWcavt9VGc8pCZLMvWLAuZs4wTKdLW7Cuv+QZb90AC5UASLkmfe4ALZfYqBJ4AAARV0lEQVR4nO1da3viNhYOku9XDAZsbjYESDCBcOu2nc6kZDKz083//0ErG7BlY8km3Nznyfuh3aWKpVc6Nx0dy3d3n/jEJz5xEUiapiiKiNBoNNA/0f9RNEm69bCOhaQoDbvrOmZbFTjAl31AwKlq23Lcri2K2r+DkqSJje7EbAPAyxBCAEBpDwDQD7wsl0DbcruNojPSRLvjtEtlyMMSDZDnZbbqdGxRu/WQCdAaLafK8Rk8Yoy46qTVKB4frdJ12lDOS2QveJAHbadbLD5ia9JGCnEck/0CQdCetMRbU9hBqnQsIbdwpfLhOatTKYA50Gx/UUD2iKlAy1qd2Demo7Uc9YPidbA8EGnPDelI56PiA0DBad2Ki+2o4HxUtnRUx74FFdFtn3FVIjrtSePqXFyTPT8VH5A1O9dVnUqN4y9CJaDD1a4oaxKyxqcaYxoAaLvXCgoq1oUkDKPDWZWrcOlcdll2bEC7c3kqmiNcnkpAR3CUC3NpmKXrcEFs2AuLWrd9JSZbOu1LBgSdK4lYyEa4nOK43HW5+KLmXsaBarWrqQvGBjiX8DhK7eRdy8fo1M5v1BTrNlxKJd4699ogLrehgiCb510bxZJvxgWxOevaKLXLxch5UK6dj43m3HJdENjy2Wya5N6YC4I8OZO/6dzKjsXYdM/CpcUWgEsJwHPsPivCbZV/D8CdnsIVzWJwQc5TPdUI3NyQYeBrJ5LpFIcLcjenbQjsqwf9NABwytZTaRdFYbaA7RPUZlIkIfMBnQ9zsW+wG8sA+9GsgKQWS8h8gI8K2qR866GnAEw+xKVROBnzAYQPhTWFcf0JmB+In1sF5QK4412n1C6klCGA6tEpgcntEhgZAKx77MJcORF7DED7yM2AW1wuRy+NohaYDFqaow6kJzmeCHke5jhDAxDyMEcWAQQPzJVuAOwxnlPKWBiWLwPBtCxTLZVlwJIbwjIUqpZlVYOG5OcBucyq/gPbAixn+wRwTI6zQxkfAv9sdUVFQ1BE2ymVSaPkZRO18xsqfkOW1BCUuYm9e6DSaJnlrGD9qHObKmVhWFCu4dWIkuiW+DTyQLZiVYuS1mHTJp2VuY6Ce3WtUStD+nTC/GGATbPLMntQGVappoSkAByWXElmSsOyeajONuqGRgYIudNoFuUx5WqKkdcO8+qATRXr2gEbOTXz2mhnsMm7SxMp6l9OVz3JSvbNExxbgjYrE3LiDZUagsBqznSAS0xhsmWTMEbNjLORiYF6TIRZ8tkLfZub23GaxKdAleitKm18JqFFfvwzxhpyZNnvUPeG0MplAijqT8v3/sZhDWXK86eYpYKUvN7oP7SlgWquTdqEqHn0c4XfIwMtU9XTEPbtgEozSvMllz6OAPnkjChlsE1VuvkfpT2bMrWDpz/3g+Qp0oiW5kufwgbmORu0ibaMz3C7s/Gub6jGfpcSr5mIf3Fb1gktlpINv36jkWnnkLMOKSMLq7j2S4o4GsXfS3j5ux8MksVzwtpoPn2azkf4MDcD4WCpJWX18vT0dYUbt/nrmMwm1/a5Rvpr3sVaKdPXXq/XnK2wQWr34y2Z5+jH0azXGw57j8YUG+V0yO0kJWwozTdBw19vq6jdaPGdFsRm+02lSnBWsWUdvf7SGUbXh/oLxma2Zredh7+sNj0GwfO83kO0iqPH7YyD0JZJU8PYtmN682h2nv7pk9nAlDAogS7JMMs1bL5R1zrjrZfL7+uf0d/O3wKNhdVoaoeo3Xo57vf7334L20m9tRAIirv/5cWrM7o38Nv1v0drODVocqZmpmonpL9mIxFVfqCumUFfQMCTcqMff/pLE9moFVoXb8kKHMtyLLY99HS/HRbIL9DkrPucwKKGXGTi5vqSFqFlKk2NqP6Rss78dRkLO8HHovGF7ouFvN8HSl97jDcWduMpRxO5MPwlBKHfG90b+l5E0YKFD5y/rilyBpyMIEAheRk+krKRoTP6eO/5cKvy0PT7Do2Z9jRkBuFKY4UJT8OlgBuz1aaph6MGpZD16t6jkOGtjCwN0csAF5t/prkMvTgeh83fxjEy054XCT2MknfToa80UN2TQSsTLgxCaKZGC7rSZHgaUuEithtSXuu6F3HBJlicvq2RP4zczLyHiQlgw4mcBhYg+kNpMVyWooa4AaGRydqhuYS/xTzmC6M38ThjJ2fa6uuXN11HZGQ3HMzmG4dFlR27O5/PX6bTheHFdOZu2hxH7YBQafkNf06fNsaYYgFAhgVwSIY58m8LXfdilNGuT1q9PGwMpEvvaCWiI27pBVdg0G4Lbx5TN4YG4yGpwmZWXPxZwkZdVf9gPL1uGPUmzZzx9IIajVQjx0fu9ke9GZ8uaHZr98YQmeumN+jjfuZO+ylgGSYA2HoTAfnbgEzkZ+5Gv+Ov4gDQf0ft6sjQLFmK26RbgAYxZA77Hb3Vm/EOACfw35t6E3nH/tZ/RA+UWjUOo8Mtl8uxj6BhCQtIlE4Vex2H7YcNiVSS0eIBSMYM82+r17rHJWYLcMu67+e57X+I7QC0bk2QwxRT4BV9bGc2NpEdE0a8Yw1JZOiBc5dEJgodvr7VBwc9sH0013uK7HO8D812zdJumHH5TGR6xK6j7vOZ9LzZblQCNaAhWWbM/z8xzRQLw7LYah3uuRotRzh8vfYwManZwfLkYRKAaptJW2YYZWVmgcWiAx4+GS1P+4BOWgpAbNWIedwk6LaZZJlhlBFCZJIqc4DUih2p0VETucL0jbhm1wA9BRiSoRbXk8mEcdWi3swkA7jUp0sNJ3kUkH42obXSEr4pw6KRkYgxc+Qz7+tMJhksCEiOMv5mJzFhJE4oJyAheFpRbS4yzQPLfAhQIiUqxTgbnlSxLLk5DrKoZIgBAKapKMDNJoNCF1IfSmzKAXmHlaMAmae99ECs+D+aDNIyUif2c4w1MUGrHZ4YHEfGzENmkIcMck0k5bRiR07ktamQcitRH7TgLCcZSuyH/w2pZEf6r4C3A5CkNz8pm5lsMuI5yZRA/yF9lNPEIMHf89R2oy8Z7vl6K4Ni5D4zTZM16VFINPy+WaW0u/v6nb40dDJEA4DtzfKTKXHct1+z0WE/i3WCjdD/1fx5yHt1Txc0SDMA5L1ZRGbWzGcAArBC3/j1+pKUttVfCTIlTlg+9hZJ3toDLT+bQYbiNMPxzOq5THM0yrH32JvFEud3ynCZZFMSuKXxl/GSOAeo00416KaZTCYKNB/0o8j4dNjB8PEeT7FLG+ZwjKwg9L3H4RO+jPM3qpxRIwByoBltUJ+YtHCGGnqgYY6ZXw+RskrblGYKb245xDLnd6vNmqagcPIhMlFA+PKWDDRhtVvj4nQAAPHQihP6/3yJ2Ex7OzlLtvN5G1EufrSo06wzfQswIeUzo6zQ6M1IkPGtg1gTQjoA+Nt3tWrGWrHC/6Ku54/IniEaqKHQttRYQ44bh4ZAm9GygBmpc+Lby1FCWfmR3JxtnZBYU3d0qqbTsZXDojUghEuzevS4klD1rzmTDgsP2DCuyyJD3TYTXyvHjqk274lswz79JTr+FIPwQFOpJjbz5XBficiwrBP1Gn9i9AjtYUjJAgKOmtBokfLmchQCzIy4GMMoc+OXEAB2L0ya04+1ZJ+j9P6j12fDtIet9mNsgLC3nYjMgJyoAfRUEzFQ5aOMxlxfxv4TZrZbArI9cmhh5sMB7k7Y50jxfDKRMCWMW/R6mU+GbAEyCmiIwRmWONN+xB1NdDJ5N/27Xyo9h7RHw3WcDL4y41K0R3hIktnPRwYZenpWIr+P7YaNHuo4GfxgYdZk+tiQxXsv5iXKobPyybBRRe/L2zg+c+HEPQwpZ2cw471aYq0JZgFGTfz52DGgdl9H+lQOaUtfYzMeqQIyzYhMlI9U7r/HWIfapMyoZKIJTgXZnGEH1Q9YfhZfmNWmrrMstmEevWLlL2w5PIOUgiM17BDgCT/uw84BR4t3ChlKSVQAojnD9+rKfdgIAOxEfcoEOXU+/EGaYgUjkA2nQ/pieH0ORFnc0QYbMjYbq41BtmaZZ+cN4r6bx852V3/sKphArLJgYdSXLMs+R6Gs+CXMSwMs9tA2vnLxWJZgPg59EhQiGzX3mmQymVUNkkUsA8Lt4Mos8yiq4iF+zw2Ssu1psxv9Nvod8EGgJuP3lChDHZmGWAZwLsj+dagAlvH5ng4pR2dZ+o9CTbKLwsZ4J7qWKqhWB7eNU08PDsBjRU2iayLzzKk1/L6/+SPjH/HiheNSy2mzKKiruhhDcWakHTmkDSgV5Hty+PiqinbLjpl5ZdHcVSaUY1umRqvbbdmxSVwYTHDcHCtNlGy/YayP1Y86Q9yd5SgHbhBfAgIZh7svb/vDznJGvZEyZJgxl0ODp4buEcnAambBGVlpMo4QFb/+ZWuTAMgY45DZmmJaieZdUNOgk7MnxHQbBnKJJn1j5y/M/miYdAiwg15ntnFORtXovK7rlB0AvZMARE8T82YHQLPIMKGzgLQd4LS3lbJgdikN/YVZk1Umu0IL+QDKWw2Q+IKU9GTozUgkyGnzrcYw7L5Kk6yHKBhiaIY5qwwoQI2WQSAViP/06gxueChh0wbpVhjlUCpyV16dov45X6Ul1gL64M1UtZm/1tEsYr6abPp8O4GlRIhufPRqMHXywtBLokPQ5IzwSj5SfqYZjwhBySVxYZq4VhPYrBCXJllj8PNvKshBQDBKLpmy1578arqkRACQUq3vD5FpxvafKBZLmeNp3S/apCUz0ufqANR3gfze4znh+WsaF5/O+GucDjJPSLOayax5qf8lcQYw3/iPZChcYB5bFoAqZ35ia7h52fIRVzNvqKMBpmkqyw3eZ/OdxdBW083QL/d9Hxykmbm+8WO6z0Yr8xnjPxIFMgcNMTL5XtK4I1fQhaMUBo+/hoZhDHs9w69vbg7SC3bQKB97iILutxyiVWGazbQhcsJy+Bg0iB65pnHBq7sykPVmo5+yHzQN5J8Zv1u/X4KacULfe29uG6KW78yY0FLgls33ul7fNaQ8MkCyhIgGJ4PLNmU/8BDWgzFH65cTuPHa8/xq8sG4LxDX3H/gch20Wy/71Ef6OOJiEDHPa9qcsEWGTCLVEfYt6SNkBSHnIwH95ZcEyKFzMXDURUeVQt0ElERmQfO/ammoL0SlLc2tB0zGsQuDlqaw104cqTE+xMJqDVCPv0trUtCrWkrsBy6fKuqVIEdfBxKgW7T7wLY4+qKWLQp5vxH4yO1GCI3iXW+GwuWP3qRXwFuBsvPLJEiZdYXXBrlWMhvFuqzxFCHz0SnW0sCTLtKUakWyz/KRAWYSYoHUBqqn3nVuC0VhA0qnX3LcKYq3Ocf101JBvA3/8ctNMSiFMAKky3aOhXjTjwIEYOUjEmV0VKo3DjkRl/N9/My+8S20vHDOD7nZ9GugLs7lvN87at2Qzbm53JLN+bncTNJY+QJckpd+XQvycXdm5sYtvneQ9xz2eGjWFT6khwNA64JfoXOu+pEQUMq6WeY0uFdMDV7yk21b2Nf4ZuOWS3Y92clQrKuIGmAvqS4ROurFFwcA9Qqf0wzQMC+8OIAzr/gV2ol6we84oWW50OcNCWhY3IVkDQDhSt+fxdAxuUuEN5Azr6UtOLRJ++xfCYZs1b2KETtEY9IunZMOhNUbfBs8RMWpsmcyBQCWqs7VlSVBx0W6czodAFnTvTEVHw3XUsFJ0gYgUK3ODQUMh9Lype2jfCDS+kn3RmqfBqnS+RgfxKRd6xxcAX9raD4fDh5BCLXlqk7HPk/e9dzQKi2kP5zMZ1oE/5sUnGq53UoxmWwhiYiQYwoQBB/GSJICPgseRSxmzW1VxKJJVxqUht3qOJapChyQy7JPC1FA/wtwgmpaTqdlN5R/A5E9JE0RKxUbsep0XAT0L8TBrjREpciSlQVpj1sP5BOf+MQnPvGJE/B/Nmd9x6sj0UIAAAAASUVORK5CYII=' alt="CSS" className="img-fluid w-50" />
                  <h6 className="text-white mt-3">
                    <span>★★★</span>★★
                  </h6>
                </Link>
              </div>
              <div className="col-6 col-lg-4 py-3 px-3">
                <Link to="#" className="text-decoration-none">
                  <img
                    src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAMAAzAMBEQACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYBAwQCBwj/xABGEAACAQMBBAQLBQQHCQAAAAAAAQIDBBEFBhIhMRVBUVIHEzNTVGFicZGh8BQiIzLBgZKT0RckQkNjgrEWJzRVZHJzsuH/xAAaAQEAAgMBAAAAAAAAAAAAAAAAAQUCAwQG/8QAKxEBAAEDAgUDBQEBAQEAAAAAAAECAxEEIQUSFDFRIkFSExUjMmFCcYEz/9oADAMBAAIRAxEAPwD7iAAAAAAAAAAAGUgMZAZWcAZAAYbS5gZXEAAAAAAAAAAAAAAAAAAAAAABhoD8xeEzaDW7Lb3WaFprGoUaMKy3adO5mox+5HksgfQtmb/ULnwH3F5K8uqt7u18V/GSdThN448+QHx2O0u0G6sa7qeH/wBXP+YHpbQ7RtZjrOrSXLKuaj/UC3eCnWNcutvNOo32palWt5Ke9CtWqOLe68ZTA/RseXADIAAAAAAAAAAAAAAAAAAAAPOQGeIH5Q8Kz/3ia5/51/6RA+3eA6Cn4NbGEknF1ayaaymt9gfPvCz4O5aLcVtb0envabVe9Wopf8PLra9l/ICt7A7YVtk9W8ZUpqvp9dpXNFpP3Sj60B+l9JubDUbOjf6e6VWhVSlCpCKAkI8gMgAAAAAAAAAAAAAAAAAAAApvhW1q/wBntjrjUdLqqncwrUlGTWeDlh8APh/9Lm2X/MaX8FAVDWNTu9Y1G41HUJKdzcS3qklHCbwl+gH3rwbatPQ/AwtSpUlVnbSrSUHyf32BXa3huuq9CdCvoNtOnNYnF1W1JMD5bfVqNe8rVra2VtSnNyjRUsqKfVkC/wDgX2pvdM2kttDT8ZYX9Rx8W35OW63vL345AfoqH5eIHoAAAAAAAAAAAAAAABjIDIDIDIEPtPoFntNpNTTNR3/s1ScZy8XLDzF5XECnf0KbI9y6/jMkF4FdkeqF1/GZAstnsbpVlsrPZuj437BNSTTn977zy+IFcXgZ2US/Ld/xmDDK8DWyndu/4zA7dF8F2zuiava6nZK5VxbT34b1VtZw1+oF4jyAzkBkBkBkDIAAAAAAAADz1hDjudStLap4utWjCXYznuam3b7y2U2a6uzV01p/pUDXOrsfJn09w6Z0/wBKgR1dj5HT3DprT/SoDq7HyOnuHTWn+lQHV2PkdPcOmdP9JgOr0/yR09w6Z0/0qA6ux8k9PcOmtP8ASoDq7HyOnuMdM6f6VAdXY+R09xnprT/SoDq7HyOnuHTOn+lQHV2PkdPcOmdP9KgOrsfI6e4dM6f6VAdXY+R09w6a0/0qA6ux8jp7h01p/pUB1dj5HT3DpnT/AEqBEa2xHujp7jPTOn+lQMuuszPdE6e47qFWFanGpTlvQksp9p1U1RVGYa8TG0thkAAAAAAAPLIzgU7ayGL+EuPGB57i1OKoWmhnMYQmfrJUbO5lfXEbB9cxsH1zHpMH1zGxOMn1zH/icH1zG3gwfXMnZGP4fXMj0mP4fXMZpMfw+uYzSY/h9cxsH1zJwbH1zI2NhtfTGd9hjPDkTFc5RMZjZ9D0qG5p9vHGMQR7HTRi1Chub1S6zewAAAAAAAeX1kTAqu2EfxreS600UXF4/VY6GVewUaxAABZfBL3YMqd9sHNjuzuS7JfAmaLntCOe3Pubsux/AclfiUc1PyN2XY/gOSvxKean5NlCDlVScJNe4wqor8Sxmqn5Ov7PHzT+Br5K/EsPqR8j7NDzRHLX4k+pHyPs0PNjlr8H1I+R9mh5oRTV7xJ9Wnyw6FPrhgwqnHdlExLHiKXcQ5pTlpuacIKO7FLLNlFWZZUzu50sySXWzfRGaoJ2iZfSLeO7QpxXVFHs7UYtwoKt6pbTYxAAAAAAAeWRPYVzbCK8Vby7JNfIp+LR6Il3aGcVKunk8+tAgCR3aJBT1SjlZXFtHboKea9ENGqnFtbdyHdj8D1PJTjspZrqxE5NyPdj8CeSnwc0+Tcj3Y/AclPg5p8tlGEfGL7sfgPp0eDml2eLh3Y/Aj6VHgzJ4uHcj8CPpUeDMni4dyPwH0qPBmXiVKnn8kfgJt04xhMVSrGtQUNSmksKSTPJcUp5b8xCz029vMuAq3Q5r1/l/abrcd2cNNut65pR7ZpfM67EZrpRdnFuZfSILEUvUexo/WFDL0ZoAAAAAAAeWRPYQW1kc6dGXdqIrOKRm069H+6orkeaW4QAEps5HOo57sGWvCozez/HHrJ9GFpPS09lR7QEhkmYHuj5RGOR2J8WDJkGTJE7JYfEQKztBHF+pd6CPK8YjF/P8WWjn8cwjCmnu63JeP78fcbqOzOHrTIeM1G2j/iJndo4zdiGq/OLcvoUWevjaFI9EgAAAAAADxIiGNXdE7TR3tHqvutP5lfxCnNiXVpZxdhSzyy6ABImdl45ua8uyC/1LnhFPrn/AI4ddOyyHoY2hVOHWLmpa2Tq0Hibkkjj1t2bVGYdOmtxXUgHrV+/79fuL+RQU8R1HtKx6Sj3Zo6vqDqxSuWv8kf5GFXEtTH+idLbw7Vq18v77efriv5GuOKanP7NfS0NkdZvU+Lg/wDKZfd78bzLHpaU1pFzO7tfGVcbyeHg9BoL/wBe1mXDftxROId65HbOzUr+0sf6xRl7LR5vjVOLlMu7RzuhihnssXFdv8b9iN1H6pjs6tAjvatbrsk38iz4fHNfiWjVT+KV9jyR6qOymyySAAAAAAAPLAj9chv6Vcr2G/gcmtjNmYbbG1yJURPgeR7L6AgCUJ/ZaOY3EvWkXvCI71K3XTvEJ4vfZXfxD7TS3bKnHvTKni85tQ7dFHqVk8zutm228tExuRsiXcc+zA5chiPcxlYNm2lb1V7f6HqOC1ZomlVauMVJjPAu57ObOyF2kj+HSl15ZRcbpjliXZo53QJ5qfCxcNxxqyOiiPThsjsktl4b2qx9mDZbcKjN1y67aiF1jyPSwqHokAAAAAAAYwBz39Pfs68O2nJfI0amM25Z25xVD50uKPHV7L+mWUR7MpMhCybMRxZ1Zd6Z6ThNP4plU6+fXCZLaOzh95QW1EvuUI9rbKLjFWLcQsND3V8oZ7LP3bLby0TG52RLuOZgE53MpDS9QVkqilByUuwtdDxCNPnMOS/Y+o7un4eYn8ix+9UfFojRy49T1OF5SjCNOcWpZy8HDruIUainEQ3WLE0VZRrKf3daPqvNWTOmltjsm9kI5v60n/Zp4+LRdcKp9cuHXz6YW+PI9Aq2SQAAAAAAAA8VVmEl2powuRmmYTHd81a3ZSXY2jxl2PVK+onNMSGvLZPdh8xHdC17Ox3dMi+9KT+Z6nhsYsZU+snNaTLJySi9Y02rfzpunOEVBPO8VfENH9aNnZYvxQjv9nbjz1P5nD9orxGJdXXR4bKGz1wqqfjafzIr4Rdn3ROu/js6BufO0zV9nu+WudZ/GegbjzlMj7Nd8nWfw6BuPOUx9mu+TrP4w9CuPOUyfs1fvKesc17p1Szgp1JxeXjCOXU8Oq08ZmWy1f55w4nyKz3dKOlxnJ+s6qezZCx7Gw43U37K/wBS84RHpmVbr53iFoXIvYV7JIAAAAAAAAYl+VkVdpHzi8ju3lxHlirNfNnjtRtcqhe2ZzRDUjmbp3lh8zKnuLjo0d3TLf1xz+p63QRjTxCj1M5uS7Ttw55gHKbAlGHuj5REMoh19ZGAGDLJBlhkTOCUJtI/w6K7ZMpeNVRFMQ7NFG+6AlwizzELNHN8TqicRlnC1bHR/qteXbV/RHouE0/ilVa6c1rEuRcOJkAAAAAAAABhkT2Hz/WI7mq3S/xMnktbTi7K600/jcZxx2dEMS6/cTT3FntNVsqNpRpSqNShBJ/d60eh0+utUW6aZ9lVe09yquZhu6bsfOv906fudjy19LdOm7Hzr/dH3Ox5T0l7wdNWPnX+6PudjyjpLvhsoa1Yuokqj/dInidiPc6W663rFlnyj+Bj910/lHTXWHrNnjyj+A+66fydNc8Ou2uKdzS8ZSeY5wmdVm/F63z0NFUYnEty5G3eY3QgNpH+LSj7LZ53jdWa6Yd2jjeUHUeIN+ooYWMI46f8s1y2Uju6Wn3ps9Pwun8Cm1k/kTaLNzMgAAAAAAAAMMiewou0cdzV6vtJM8vxKMX5W+kn8aNRXR4dkD5evqMqO6J2dcNLvZwjKNBuLWU88zrjR3q4zTS01aiimcTL10Tfejv4mXQ3/ix6u3Pu5a1KVCq6dWO7Nc0ctdmu3Vy1N1NfN2eDTE7ZZ5bLby0SLk7MZl3dZz5YBPdK1aJDd06l68s9hwynGmiFNe3rl38ixiPZplWtopZvorsgvmzy/GJzex4hZaKPTNSIr8KTKenvh2wjzp9sM142eh4vSKHr4nq+GxixCk1PquSlVyO5oZAAAAAAAAAYlyIlCl7VxxqSl3oI85xSn8610U+hDoqYjd3wwzKjaWNS6aXLe062f+Gj1mj3s0qW/wD/AEl1HdjdzzCqbQpx1OTX9qKZ5XiUTF6Vzov13Rr5FZ7OrG7Za+XiRc/VEu45oYHXnsMojdE9lv0xbtjRXZFHttFTy6elTXP2l1M7Ia1W11p6lP1RSPI8WqzfmVrpI/Eirp/hv3lbR+zqhxYOmN5wzX7SYbunW8X3Eev0lPLZiFDenN2XcuR0tbIAAAAAAAADDAqe2EMXFCXbFooOLU4q5lloJ2lXyknusY7MMmESt2hS3tLovsyvmeq4bVnTwpNXGK5SBY+7nwiNW0md7VVanUjCW7jdkVWt4dVdnmiXZZ1PIhrjSL6hzpOa7YcSmucPv0T2d9Gppnu56EXCulJOMuxrBxXqJp2qplt+pRMJOjbV6zxSoyku3GDGjSV19oaKr1ET3d1LQ7mp5WUaafUuLLK1wi5MxNTRVq6e0LDQp+KpRprjurGT0tu3yW4pV9VWasvb5mfuxlUtUlvajXftY+CPF8QqzdqXGn2tI27eIL3nJbdNLkXFpdrOmiM1QmqdpfRbOO7bUl2QSPZW4xEf8UNf7S3rkbWDIAAAAAAAAAyJFY2xj9y3l62im4vH44d+in1TCso8+s42jATBK0bOSzp273Zs9Lwqc2uVT62MVJUte87uXGIFw5cByxHaTEBGEc0xLMKcZ1E5Ri32tGuq3RPelnFyp2KOOoU00x2hjMzLODNGDkEsN4yzGZ23O8qbdy3rqtLtmzxGrnN6VzZj0YcF7yiarcN9LTRjmvTj2ySOuzvciPLG7tRL6LS+7CK7Fg9jR2hRTvLYuRmhkAAAAAAAAAAr+10c2NOXZURU8VjNuHXo5/IqS5YPOTGJXEgQ3215cWjf2erKGeaXJm+zqb1n9WuuzTc7pOhtDWh5elGp64/df/0sbPFa6f3ct3QRV2SNDW7OrwcpQb6pL9Swt8Rs1d3LVpKqXfSq0qyzSnGS9TOyi7br/WXPVRXHs3UfKG3f2lhiXS5bqy8L3muqrl7p3lyVtRtqP56qz2J5OWvW2Le81NkWKqnBW16PKhSbXbJ4K+9xiI/Rvo0k+6Pr6pd1U0pxhF9UUVl3il253dVGmpp7uN8XlvLKyauarLoxEdnJeP78fcbrbOk06O/qFuu2ojs0lOb0MNRPol9BiewjZRPa5GQyAAAAAAAAAwwIbaeO9pU33ZJldxGnNl06WcXFMR5ee66AgISCd0dmCYnCXqM5U+NOco+5s2Rdrp3iWFVMVd4SFlq17TmoePcl7Syb519+mnaWirTW53b6tzcVn+JWk/2nDVqr1fepEWKIafWaJmZ7tsYgISEZyg6iYgw4rqWanDjwN9uNmdLq0OO/qtuupSyWOgjN+GnVTi3K9nqqVJOz0uRklkAAAAAAAABhgRuvR39KuF7OTj10TNmW3Tzi4ovr7TydUYlewfoQkyiEBIBIRI2W3lomNc7IqdxztY2kstolOGuVxTj15fqMopmTlaZ3Un+WOPeZxbThqlVnL80vgZ8jLDwyYgSuzEd7VY+zFssuF05vZcmtnFvC64yenj3U+NnpEwlkAAAAAAAAAA11IqcXGUU4vmmYzvGJIzE5hF3OgWNbOKbpt9cHg4bnDrde8OinVXIRVzstVjl21ZS9UlhnDc4VP+ZdNGt8ou50m+ts+Mt5td6PFFfc0V2iccrpp1VupycVwaw/Wck0zTOJhuiqJ7MPgssiY8SywZXaRGfc3eoS3JKWM4FUZS9TuKj5cF6jGKYY4a3mT4vJljDLEHJEomYhspUK1Z4o0pz/AO2JuotXK+0NdV6mISVvs9fVkpS3aS9p8TutcMuV95w5q9ZEbQlLTZihHjcVZVH2Lgiwt8Lop/bdzV6uqeyWtLC3tHm3oxjwxnrO+3p7VveiMOaq7XX3diWDdDBkkAAAAB//2Q=='
                    alt="JavaScript"
                    className="img-fluid w-50"
                  />
                  <h6 className="text-white mt-3">
                    <span>★★★</span>★★
                  </h6>
                </Link>
              </div>
              <div className="col-6 col-lg-4 py-3 px-3">
                <Link to="#" className="text-decoration-none">
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHhGETiCc_Hct6__P9a6iU9vs1DqRCDEiHNQ&s' alt="Bootstrap" className="img-fluid w-50" />
                  <h6 className="text-white mt-3">
                    <span>★★★★</span>★
                  </h6>
                </Link>
              </div>
              <div className="col-6 col-lg-4 py-3 px-3">
                <Link to="#" className="text-decoration-none">
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHN_-raoVqbd27b9HS2nbWyKRuVePKnXfyYg&s' alt="Bootstrap" className="img-fluid w-50" />
                  <h6 className="text-white mt-3">
                    <span>★★★★</span>★
                  </h6>
                </Link>
              </div>
              <div className="col-6 col-lg-4 py-3 px-3">
                <Link to="#" className="text-decoration-none">
                  <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt="Bootstrap" className="img-fluid w-50" />
                  <h6 className="text-white mt-3">
                    <span>★★★</span>★
                  </h6>
                </Link>
              </div>
              <div className="col-6 col-lg-4 py-3 px-3">
                <Link to="#" className="text-decoration-none">
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPAbKd_ctPjSVa-t7gtREo1YsShFc9OSySMg&s' alt="Bootstrap" className="img-fluid w-50" />
                  <h6 className="text-white mt-3">
                    <span>★★★</span>★
                  </h6>
                </Link>
              </div>
              <div className="col-6 col-lg-4 py-3 px-3">
                <Link to="#" className="text-decoration-none">
                  <img src='https://www.python.org/static/opengraph-icon-200x200.png' alt="Python" className="img-fluid w-50" />
                  <h6 className="text-white mt-3">
                    <span>★★★</span>★★
                  </h6>
                </Link>
              </div>
              <div className="col-6 col-lg-4 py-3 px-3">
                <Link to="#" className="text-decoration-none">
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTuIIjcBvqyhAIv1VfnNzVHOaPlaCDpOHivg&s' alt="React" className="img-fluid w-50" />
                  <h6 className="text-white mt-3">
                    <span>★★★</span>★★
                  </h6>
                </Link>
              </div>
            </div>
            <p className="my-3 mx-3" id="skillsText">
              Embrace growth, each step forward gets you closer transforming
              <span> mastery</span>. <br />
              Build upon your skills, transforming
              <span> 3s into 4s</span>, and <span>4s into 5s</span>, one at a
              time..!!
            </p>
            
          </div>
          <div className="col-12 col-lg-6 my-3" id="skillImg">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;