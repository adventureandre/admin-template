import MenuItem from "@/components/template/MenuItem";
import {IconeAjuste, IconeCasa, IconeSino} from "@/components/icons";

export default function MenuLateral() {
    return (
        <aside>
          <ul>
              <MenuItem url='/' texto="Início" icone={IconeCasa}/>
              <MenuItem url='/ajustes' texto="Ajustes" icone={IconeAjuste}/>
              <MenuItem url='/notificacoes' texto="Notificações" icone={IconeSino}/>
          </ul>
        </aside>
    )
}